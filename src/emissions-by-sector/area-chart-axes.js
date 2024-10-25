import * as d3 from 'd3';
import yearlyTotals from '../data/yearly-emissions-by-sector.json';
import yearlyTotalsStack from '../data/emissions-by-sector-stack.json';
import { gray, spacing, twScheme } from '../tailwind';
import { createLegend } from './area-chart-legend';

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

const area = d3
    .area()
    .x((d) => xScale(d.data[0]))
    .y0((d) => yScale(d[0]))
    .y1((d) => yScale(d[1]));

const dimension = {
    width: spacing('72', 2),
    height: spacing('56', 2),
    mt: 20,
    mr: 20,
    mb: 20,
    ml: 25,
};

const svg = d3
    .select('.emissions-by-sector')
    .attr('width', dimension.width)
    .attr('height', dimension.height);

const xScale = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.year))
    .range([dimension.ml, dimension.width - dimension.mr]);
const yScale = d3
    .scaleLinear()
    .domain([d3.max(series, (d) => d3.max(d, (d) => d[1])), 0])
    .range([dimension.mt, dimension.height - dimension.mb]);

export const color = d3.scaleOrdinal().domain(sectors).range(twScheme);

// x axis
svg.append('g')
    .attr('transform', `translate(0, ${dimension.height - dimension.mb})`)
    .call(d3.axisBottom(xScale));

// y axis
svg.append('g')
    .attr('transform', `translate(${dimension.ml}, 0)`)
    .call(d3.axisLeft(yScale).ticks(5))
    .call((g) => g.select('.domain').remove())
    .call((g) =>
        g
            .selectAll('.tick line')
            .clone()
            .attr('x2', dimension.width - dimension.ml - dimension.mr)
            .attr('stroke-opacity', 0.1)
    );

svg.append('g')
    .selectAll()
    .data(series)
    .join('path')
    .classed('area', true)
    .attr('fill', (d) => color(d.key))
    .attr('d', area)
    .attr('opacity', 0.7)
    .attr('stroke', gray[500])
    .attr('stroke-width', 0.5)
    .append('title')
    .text((d) => d.key);

createLegend(sectors, color);