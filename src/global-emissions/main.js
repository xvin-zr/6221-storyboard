import * as d3 from 'd3';

Promise.all([
    d3.json('/annual-co2-emissions-per-country.json'),
    d3.json('/co-emissions-per-capita.json'),
    d3.json('/cumulative-co-emissions.json'),
    d3.json(
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'
    ),
])
    .then(function ([annualData, perCapitaData, cumulativeData, world]) {
        let currentDataset = 'Annual CO₂ emissions';
        let processedData = [];

        // Data Loading
        function processDataset() {
            switch (currentDataset) {
                case 'Annual CO₂ emissions':
                    processedData = annualData.map((item) => ({
                        Code: item.Code,
                        Entity: item.Entity,
                        Year: +item.Year,
                        emission: +item['Annual CO₂ emissions'],
                    }));
                    break;
                case 'CO₂ emissions per capita':
                    processedData = perCapitaData.map((item) => ({
                        Code: item.Code,
                        Entity: item.Entity,
                        Year: +item.Year,
                        emission: +item['Annual CO₂ emissions (per capita)'],
                    }));
                    break;
                case 'Total CO₂ emissions':
                    processedData = cumulativeData.map((item) => ({
                        Code: item.Code,
                        Entity: item.Entity,
                        Year: +item.Year,
                        emission: +item['Cumulative CO₂ emissions'],
                    }));
                    break;
            }
        }

        processDataset();

        // map
        const width = 960;
        const height = 500;
        const svg = d3
            .select('#chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const projection = d3
            .geoMercator()
            .scale(130)
            .translate([width / 2, height / 1.5]);

        const path = d3.geoPath().projection(projection);

        const countries = world.features;

        //tooltip
        const tooltip = d3
            .select('body')
            .append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('background', 'white')
            .style('padding', '5px')
            .style('border', '1px solid #ccc')
            .style('border-radius', '4px')
            .style('visibility', 'hidden');

        // mouseover interaction
        svg.selectAll('path')
            .data(countries)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('class', 'country')
            .attr('fill', '#ccc')
            .on('mouseover', function (event, d) {
                const countryCode = d.id.trim().toUpperCase();
                const year = +slider.property('value');
                const emission =
                    emissionByCountry[year] &&
                    emissionByCountry[year][countryCode];
                const countryName = d.properties.name;
                tooltip
                    .style('visibility', 'visible')
                    .html(
                        `${countryName}<br>Emission: ${
                            emission ? emission.toLocaleString() : 'N/A'
                        }`
                    );
            })
            .on('mousemove', function (event) {
                tooltip
                    .style('top', `${event.pageY - 10}px`)
                    .style('left', `${event.pageX + 10}px`);
            })
            .on('mouseout', function () {
                tooltip.style('visibility', 'hidden');
            });

        // year slider
        const slider = d3
            .select('#slider-container')
            .append('input')
            .style('width', `${width}px`)
            .attr('type', 'range')
            .attr('min', 1750)
            .attr('max', 2022)
            .attr('value', 2022)
            .attr('step', 1)
            .on('input', function () {
                const year = +this.value;
                d3.select('#year-label').text(year);
                updateMap(year);
                updateBarChart(year);
            });

        d3.select('#slider-container')
            .append('label')
            .attr('id', 'year-label')
            .text(2022);

        // control => dataset
        d3.select('#controls')
            .selectAll('button')
            .data([
                'Annual CO₂ emissions',
                'CO₂ emissions per capita',
                'Total CO₂ emissions',
            ])
            .enter()
            .append('button')
            .text((d) => d)
            .on('click', function (event, d) {
                currentDataset = d;
                processDataset();
                updateData();
                const year = +slider.property('value');
                updateMap(year);
                updateBarChart(year);
                updateLegend();
            });

        let emissionByCountry = {};
        updateData();

        function updateData() {
            emissionByCountry = {};
            processedData.forEach((d) => {
                if (!emissionByCountry[d.Year]) {
                    emissionByCountry[d.Year] = {};
                }
                emissionByCountry[d.Year][d.Code] = d.emission;
            });
        }

        function updateMap(year) {
            let scaleFactor;
            switch (currentDataset) {
                case 'Annual CO₂ emissions':
                    scaleFactor = 10000000;
                    break;
                case 'CO₂ emissions per capita':
                    scaleFactor = 10;
                    break;
                case 'Total CO₂ emissions':
                    scaleFactor = 500000000;
                    break;
            }

            // color
            svg.selectAll('path').attr('fill', (d) => {
                const countryCode = d.id.trim().toUpperCase();
                const emission =
                    emissionByCountry[year] &&
                    emissionByCountry[year][countryCode];
                if (emission === undefined) {
                    return '#ccc';
                } else {
                    return d3.interpolateReds(emission / scaleFactor);
                }
            });
        }

        updateMap(2022);

        // plotting scale
        const legendWidth = 300;
        const legendHeight = 10;
        const legendSvg = d3
            .select('#chart')
            .append('svg')
            .attr('width', legendWidth + 50)
            .attr('height', 50)
            .attr('class', 'legend');

        const gradient = legendSvg
            .append('defs')
            .append('linearGradient')
            .attr('id', 'gradient')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');

        gradient
            .append('stop')
            .attr('offset', '0%')
            .attr('stop-color', d3.interpolateReds(0));

        gradient
            .append('stop')
            .attr('offset', '100%')
            .attr('stop-color', d3.interpolateReds(1));

        legendSvg
            .append('rect')
            .attr('x', 10)
            .attr('y', 20)
            .attr('width', legendWidth)
            .attr('height', legendHeight)
            .style('fill', 'url(#gradient)');

        let legendScale = d3
            .scaleLinear()
            .domain([0, 10000000])
            .range([0, legendWidth]);

        let legendAxis = d3
            .axisBottom(legendScale)
            .ticks(5)
            .tickFormat(d3.format('.2s'));

        legendSvg
            .append('g')
            .attr('class', 'legend-axis')
            .attr('transform', `translate(10, ${20 + legendHeight})`)
            .call(legendAxis);

        function updateLegend() {
            let legendDomain;
            switch (currentDataset) {
                case 'Annual CO₂ emissions':
                    legendDomain = [0, 10000000];
                    break;
                case 'CO₂ emissions per capita':
                    legendDomain = [0, 10];
                    break;
                case 'Total CO₂ emissions':
                    legendDomain = [0, 500000000];
                    break;
            }

            legendScale.domain(legendDomain);
            legendSvg.select('.legend-axis').call(legendAxis);
        }

        updateLegend();

        // barchart
        const margin = { top: 20, right: 30, bottom: 50, left: 70 };
        const barChartWidth = 960 - margin.left - margin.right;
        const barChartHeight = 300 - margin.top - margin.bottom;

        const barChartSvg = d3
            .select('#chart')
            .append('svg')
            .attr('width', barChartWidth + margin.left + margin.right)
            .attr('height', barChartHeight + margin.top + margin.bottom)
            .attr('class', 'bar-chart')
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const focusCountries = [
            'United States',
            'China',
            'Russia',
            'European Union (27)',
            'United Kingdom',
            'Singapore',
        ];

        function updateBarChart(year) {
            const filteredData = processedData.filter(
                (d) => d.Year === year && focusCountries.includes(d.Entity)
            );

            const xScale = d3
                .scaleBand()
                .domain(filteredData.map((d) => d.Entity))
                .range([0, barChartWidth])
                .padding(0.1);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(filteredData, (d) => d.emission) * 1.1])
                .range([barChartHeight - 50, 0]);

            barChartSvg.selectAll('rect').remove();
            barChartSvg.selectAll('g').remove();
            barChartSvg.selectAll('text.label').remove();

            barChartSvg
                .selectAll('rect')
                .data(filteredData)
                .enter()
                .append('rect')
                .attr('x', (d) => xScale(d.Entity))
                .attr('y', (d) => yScale(d.emission))
                .attr('width', xScale.bandwidth())
                .attr('height', (d) => barChartHeight - 50 - yScale(d.emission))
                .attr('fill', 'steelblue');

            barChartSvg.selectAll('rect').each(function (d) {
                barChartSvg
                    .append('text')
                    .attr('class', 'label')
                    .attr('x', xScale(d.Entity) + xScale.bandwidth() / 2)
                    .attr('y', yScale(d.emission) - 5)
                    .attr('text-anchor', 'middle')
                    .text(d.emission.toLocaleString());
            });

            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale).tickFormat(d3.format('.2s'));

            barChartSvg
                .append('g')
                .attr('transform', `translate(0, ${barChartHeight - 50})`)
                .call(xAxis);

            barChartSvg
                .append('g')
                .attr('transform', 'translate(30, 0)')
                .call(yAxis);
        }

        updateBarChart(2022);
    })
    .catch(function (error) {
        console.error('ERROR in Data Loading:', error);
    });
