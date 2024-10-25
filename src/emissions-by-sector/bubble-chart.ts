import * as d3 from 'd3';
import topCountries from '../data/top-5-emitters.json';
import { gray, spacing, twScheme } from '../tailwind';
import { LegendKey } from './area-chart-legend';

const MILLION = 1_000_000;

const dimension = {
    width: spacing('52', 2),
    height: spacing('52', 2),
    mt: 2,
    mr: 2,
    mb: 2,
    ml: 2,
};

const svg = d3
    .select('.top-emission-countries')
    .attr('width', dimension.width)
    .attr('height', dimension.height);

const color = d3.scaleOrdinal<string>(twScheme);

export function renderBubbleChart(selected: LegendKey | null) {
    svg.selectAll('*').remove();

    if (selected === null) return;

    const pack = d3
        .pack<CountryData>()
        .size([
            dimension.width - dimension.ml - dimension.mr,
            dimension.height - dimension.mt - dimension.mb,
        ])
        .padding(3);

    const root = d3
        .hierarchy<HierarchyData>({
            children: topCountries[selected],
        })
        .sum((d: any) => d.value);

    const packedRoot = pack(root as any);
    const container = svg
        .append('g')
        .attr('transform', `translate(${dimension.ml}, ${dimension.mt})`)
        .style('opacity', 0);

    const nodes = container
        .append('g')
        .attr('transform', `translate(${dimension.ml}, ${dimension.mt})`)
        .selectAll()
        .data(packedRoot.leaves())
        .join('g')
        .attr('transform', (d) => `translate(${d.x},${d.y})`);

    // Draw circles with initial radius 0
    nodes
        .append('circle')
        .attr('r', 0) // Start with radius 0
        .attr('fill', (d) => color(d.data.country))
        .attr('opacity', 0.7)
        .attr('stroke', gray[50])
        .attr('stroke-width', 2)
        .transition() // Add transition
        .duration(500)
        .ease(d3.easeCubicOut)
        .attr('r', (d) => d.r); // Animate to final radius

    // Append text group at circle center
    const textGroup = nodes
        .append('g')
        .attr('class', 'text-group')
        .style('opacity', 0);

    // Append country name
    textGroup
        .append('text')
        .text((d) => d.data.country)
        .attr('text-anchor', 'middle')
        .attr('y', '-0.3em') // Move up by half line height
        .style('font-size', (d) => {
            const maxFontSize = d.r / 3;
            const minFontSize = 8;
            const fontSize = Math.min(maxFontSize, 16);
            return Math.max(fontSize, minFontSize) + 'px';
        })
        .style('fill', gray[700])
        .style('pointer-events', 'none');

    // Append value text
    textGroup
        .append('text')
        .attr('class', 'value-text')
        .text((d) => `${(d.data.value / MILLION).toFixed(2)}M t`)
        .attr('text-anchor', 'middle')
        .attr('y', '0.8em') // Move down by half line height
        .style('font-size', (d) => {
            const maxFontSize = (d.r / 3) * 0.8;
            const minFontSize = 8;
            const fontSize = Math.min(maxFontSize, 14);
            return Math.max(fontSize, minFontSize) + 'px';
        })
        .style('fill', gray[600])
        .style('pointer-events', 'none');

    // Fade in the entire container
    container
        .transition()
        .duration(500)
        .style('opacity', 1)
        .on('end', () => {
            // After container fades in, fade in the text group
            nodes
                .selectAll('.text-group')
                .transition()
                .duration(400)
                .style('opacity', 1);
        });
}
