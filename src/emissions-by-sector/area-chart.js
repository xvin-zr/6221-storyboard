import * as d3 from 'd3';
import yearlyTotalsStack from '../data/emissions-by-sector-stack.json';
import yearlyTotals from '../data/yearly-emissions-by-sector.json';
import { gray, spacing, twScheme } from '../tailwind';
import { createLegend, legendMap } from './area-chart-legend';

const BILLION = 1_000_000_000;
const data = yearlyTotalsStack.map((d) => ({
    ...d,
    year: new Date(d.year),
    value: d.value / BILLION,
}));

export const sectors = Object.keys(yearlyTotals[Object.keys(yearlyTotals)[0]]);

const series = d3
    .stack()
    .keys(sectors)
    .value(([, group], key) => group.get(key).value)
    .order(d3.stackOrderDescending)(
    d3.index(
        data,
        (d) => d.year,
        (d) => d.sector
    )
);

const dimension = {
    width: spacing('72', 2),
    height: spacing('56', 2),
    mt: 20,
    mr: 15,
    mb: 20,
    ml: 45,
};

const svg = d3
    .select('.emissions-by-sector')
    .attr('width', dimension.width)
    .attr('height', dimension.height);

const mainGroup = svg.append('g').attr('class', 'main-group');

const xScale = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.year))
    .range([dimension.ml, dimension.width - dimension.mr]);

const yScale = d3
    .scaleLinear()
    .domain([d3.max(series, (d) => d3.max(d, (d) => d[1])), 0])
    .range([dimension.mt, dimension.height - dimension.mb]);

const area = d3
    .area()
    .x((d) => xScale(d.data[0]))
    .y0((d) => yScale(d[0]))
    .y1((d) => yScale(d[1]));

export const color = d3.scaleOrdinal().domain(sectors).range(twScheme);

// create tooltip
const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('background-color', 'rgba(255, 255, 255, 0.95)')
    .style('padding', '10px')
    .style('border', '1px solid #ddd')
    .style('border-radius', '4px')
    .style('box-shadow', '0 2px 4px rgba(0,0,0,0.1)')
    .style('pointer-events', 'none')
    .style('z-index', '1000');

// area for events capturing
const chartArea = svg
    .append('rect')
    .attr('class', 'chart-area')
    .attr('x', dimension.ml)
    .attr('y', dimension.mt)
    .attr('width', dimension.width - dimension.ml - dimension.mr)
    .attr('height', dimension.height - dimension.mt - dimension.mb)
    .style('fill', 'none')
    .style('pointer-events', 'all');

// vertical line
const verticalLine = mainGroup
    .append('line')
    .attr('class', 'vertical-line')
    .style('stroke', gray[400])
    .style('stroke-dasharray', '4,4')
    .style('stroke-width', 1)
    .style('pointer-events', 'none')
    .style('visibility', 'hidden');

// x axis
mainGroup
    .append('g')
    .attr('transform', `translate(0, ${dimension.height - dimension.mb})`)
    .call(d3.axisBottom(xScale));

// y axis
mainGroup
    .append('g')
    .attr('transform', `translate(${dimension.ml}, 0)`)
    .call(
        d3
            .axisLeft(yScale)
            .ticks(5)
            .tickFormat((d) => `${d} bn t`)
    )
    .call((g) => g.select('.domain').remove())
    .call((g) =>
        g
            .selectAll('.tick line')
            .clone()
            .attr('x2', dimension.width - dimension.ml - dimension.mr)
            .attr('stroke-opacity', 0.1)
    );

// stack area chart
mainGroup
    .selectAll('path.area')
    .data(series)
    .join('path')
    .attr('class', 'area')
    .attr('fill', (d) => color(d.key))
    .attr('d', area)
    .attr('opacity', 0.7)
    .attr('stroke', gray[500])
    .attr('stroke-width', 0.5)
    .style('pointer-events', 'none');

function mousemove(event) {
    const [mouseX] = d3.pointer(event);

    if (mouseX < dimension.ml || mouseX > dimension.width - dimension.mr)
        return;

    const date = xScale.invert(mouseX);

    // find the nearest data point
    const bisect = d3.bisector((d) => d.year).left;
    const i = bisect(data, date);

    if (i >= data.length) return;

    // select the nearest data point
    const dataPointA = data[Math.max(0, i - 1)];
    const dataPointB = data[i];
    const dataPoint = !dataPointB
        ? dataPointA
        : date - dataPointA.year > dataPointB.year - date
        ? dataPointB
        : dataPointA;

    if (!dataPoint) return;
    console.log({ dataPoint });

    const index = Math.floor(
        data.findIndex((d) => d.year.getTime() === dataPoint.year.getTime()) /
            sectors.length
    );
    if (index === -1) return;

    // update vertival line
    const xPos = xScale(dataPoint.year);
    verticalLine
        .attr('x1', xPos)
        .attr('y1', dimension.mt)
        .attr('x2', xPos)
        .attr('y2', dimension.height - dimension.mb)
        .style('visibility', 'visible');

    // create tooltip content
    let tooltipContent = `
        <div class='font-bold mb-1 border-b pb-1'>
            ${dataPoint.year.getFullYear()}
        </div>
    `;

    // calculate sector values
    const sectorValues = sectors.map((sector) => {
        const sectorData = series.find((s) => s.key === sector);
        let value = 0;
        if (sectorData && sectorData[index]) {
            value = sectorData[index][1] - sectorData[index][0];
        }
        return { sector, value };
    });

    // append tooltip content
    sectorValues.forEach(({ sector, value }) => {
        tooltipContent += `
            <div class='flex items-center justify-between my-0.5 mx-0'>
                <div class='flex items-center'>
                    <div class='size-2 bg-[${color(
                        sector
                    )}] mr-1.5 rounded-full'></div>
                    <div style="min-width: 100px;">${legendMap[sector]}</div>
                </div>
                <div class='ml-3 font-medium'>${value.toFixed(2)} bn t</div>
            </div>
        `;
    });

    // update tooltip position and content
    tooltip
        .style('visibility', 'visible')
        .style('left', `${event.pageX + 15}px`)
        .style('top', `${event.pageY - 10}px`)
        .html(tooltipContent);
}

function mouseout() {
    verticalLine.style('visibility', 'hidden');
    tooltip.style('visibility', 'hidden');
}

chartArea.on('mousemove', mousemove).on('mouseout', mouseout);

createLegend(sectors, color);
