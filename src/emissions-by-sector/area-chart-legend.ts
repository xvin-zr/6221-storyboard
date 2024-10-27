import * as d3 from 'd3';
import { renderBubbleChart } from './bubble-chart';

export const legendMap = {
    other_fuel: 'Other',
    bunker_fuel: 'Aviation',
    waste: 'Waste',
    buildings: 'Buildings',
    industry: 'Industry',
    fugitive: 'Fugitive',
    agriculture: 'Agriculture',
    manufacturing_construction: 'Manufacturing',
    transport: 'Transport',
    electricity_heat: 'Electricity',
} satisfies Record<string, string>;

export type LegendKey = keyof typeof legendMap;

export function createLegend(sectors: string[], color: (s: string) => string) {
    const legend = document.querySelector('.emissions-by-sector__legend')!;
    legend.innerHTML = `${sectors
        .map(
            (sector) =>
                `<li class='flex gap-1 truncate items-center text-xs cursor-pointer w-fit' data-sector="${sector}"><span class='size-2 inline-block rounded-full bg-[${color(
                    sector
                )}]'></span>${legendMap[sector as LegendKey]}</li>`
        )
        .join('')}`;

    document
        .querySelector('.emissions-by-sector')
        ?.addEventListener('click', (e) => {
            e.preventDefault();
            legendProxy.selected = null;
        });
}

export const legendProxy = new Proxy<{ selected: LegendKey | null }>(
    { selected: null },
    {
        set(target, prop, value) {
            if (prop !== 'selected') {
                return false;
            }

            target[prop] = value;

            const area = d3.select('.emissions-by-sector').selectAll('.area');

            if (value === null) {
                area.transition().duration(200).attr('opacity', 0.7);
            } else {
                area.transition()
                    .duration(150)
                    .attr('opacity', (d: any) => (d.key === value ? 0.7 : 0.3));
            }
            renderBubbleChart(value);

            return true;
        },
    }
);

document
    .querySelector('.emissions-by-sector__legend')
    ?.addEventListener('click', (e) => {
        const target = e.target as HTMLUListElement | HTMLLIElement;
        const sector = target.getAttribute('data-sector') as LegendKey | null;
        legendProxy.selected = sector;
    });
