import * as d3 from 'd3';

const data = Array.from({ length: 50 }, (_, i) => ({
    year: new Date(`${1975 + i}`),
    value: Math.floor(Math.random() * 100),
}));

const dimension: Dimension = {
    // width: spacing('80', 2),
    // height: spacing('60', 2),
    width: 640,
    height: 480,
    mt: 20,
    mr: 20,
    mb: 20,
    ml: 20,
};

const svg = d3
    .select('svg')
    .attr('width', dimension.width)
    .attr('height', dimension.height);

const xScale = d3
    .scaleUtc()
    .domain([d3.min(data, (d) => d.year)!, d3.max(data, (d) => d.year)!])
    .range([dimension.ml, dimension.width - dimension.mr]);
const yScale = d3
    .scaleLinear()
    .domain([d3.max(data, (d) => d.value)!, d3.min(data, (d) => d.value)!])
    .range([dimension.mt, dimension.height - dimension.mb]);

// x axis
svg.append('g')
    .attr('transform', `translate(0, ${dimension.height - dimension.mb})`)
    .call(d3.axisBottom(xScale));

// y axis
svg.append('g')
    .attr('transform', `translate(${dimension.ml}, 0)`)
    .call(d3.axisLeft(yScale));
