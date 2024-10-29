import * as d3 from 'd3';

// 读取 CSV 数据
Promise.all([d3.csv('/co2_emissions.csv'), d3.csv('/temp-change.csv')]).then(
    (data) => {
        const co2Data = data[0];
        const tempData = data[1];

        // 数据合并和处理
        const mergedData = mergeData(co2Data, tempData);
        const sampleData = mergedData.filter((d) => d.country === 'World');
        const years = [...new Set(sampleData.map((d) => d.year))]; // 获取年份

        // 定义大洲数组
        const continents = [
            'World',
            'Asia',
            'Europe',
            'North America',
            'South America',
            'Africa',
            'Oceania',
        ];

        // 创建按钮
        const buttonContainer = d3.select('#button-container');
        continents.forEach((continent) => {
            buttonContainer
                .append('button')
                .text(continent)
                .attr('class', 'continent-button')
                .on('click', function () {
                    // 过滤数据并更新图表
                    if (continent === 'World') {
                        updateChart(sampleData);
                    } else {
                        const filterData = mergedData.filter(
                            (d) => d.country === continent
                        );
                        updateChart(filterData); // 更新图表的函数
                    }
                });
        });

        // 设置 SVG 的宽度和高度
        const margin = { top: 20, right: 50, bottom: 40, left: 70 };
        const width = 900 - margin.left - margin.right;
        const height = 690 - margin.top - margin.bottom;

        // 创建 SVG 元素
        const svg = d3.select('svg').attr('width', 900).attr('height', 690);

        // 创建一个 g 元素用于移动整个图表
        const g = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // 创建 X 轴比例尺
        const x = d3
            .scaleLinear()
            .domain(d3.extent(years)) // 使用年份的最小值和最大值
            .range([0, width]);

        // 创建两个 Y 轴比例尺
        const y1 = d3
            .scaleLinear()
            .domain([0, d3.max(sampleData, (d) => +d.co2_emissions)]) // CO2 排放量
            .range([height, 0]);

        const y2 = d3
            .scaleLinear()
            .domain([
                d3.min(sampleData, (d) => +d.temperature_change) - 0.1,
                d3.max(sampleData, (d) => +d.temperature_change),
            ]) // 温度变化
            .range([height, 0]);

        // 添加 X 轴
        g.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x).ticks(15).tickFormat(d3.format('d'))) // 每10年显示一个刻度，并格式化为整数
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');

        // 添加左侧 Y 轴（CO2 排放量），并格式化为百万
        g.append('g')
            .call(d3.axisLeft(y1).tickFormat((d) => d / 1000000 + 'M')) // 将值转换为百万并添加 "M" 单位
            .append('text')
            .attr('fill', 'black')
            .attr('y', -10)
            .attr('x', 15)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('CO2 Emissions');

        // 添加右侧 Y 轴（温度变化）
        const y2Axis = d3.axisRight(y2);
        g.append('g')
            .attr('transform', `translate(${width}, 0)`)
            .call(y2Axis)
            .append('text')
            .attr('fill', 'black')
            .attr('y', -10)
            .attr('x', -55)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'start')
            .text('Temperature Change');

        updateChart(sampleData);

        function updateChart(data) {
            // 清空现有的散点
            g.selectAll('circle').remove();

            // 绘制 CO2 排放量的散点，调整散点大小
            g.selectAll('.circle-co2')
                .data(data)
                .enter()
                .append('circle')
                .attr('class', 'circle-co2')
                .attr('cx', (d) => x(+d.year)) // 使用线性比例尺
                .attr('cy', (d) => y1(d.co2_emissions))
                .attr('r', 3) // 调整散点大小
                .attr('fill', 'steelblue')
                .on('mouseover', function (event, d) {
                    tooltip.transition().duration(200).style('opacity', 0.9);
                    tooltip
                        .html(
                            `Year: ${d.year}<br>CO2 Emissions:<br> ${d.co2_emissions}`
                        )
                        .style('left', event.pageX + 5 + 'px')
                        .style('top', event.pageY - 28 + 'px');
                })
                .on('mousemove', function (event) {
                    tooltip
                        .style('left', event.pageX + 5 + 'px')
                        .style('top', event.pageY - 28 + 'px');
                })
                .on('mouseout', function (d) {
                    tooltip.transition().duration(500).style('opacity', 0);
                });

            // 绘制温度变化的散点，调整散点大小
            g.selectAll('.circle-temp')
                .data(data)
                .enter()
                .append('circle')
                .attr('class', 'circle-temp')
                .attr('cx', (d) => x(+d.year)) // 使用线性比例尺
                .attr('cy', (d) => y2(d.temperature_change))
                .attr('r', 3) // 调整散点大小
                .attr('fill', 'orange')
                .on('mouseover', function (event, d) {
                    tooltip.transition().duration(200).style('opacity', 0.8);
                    tooltip
                        .html(
                            `Year: ${d.year}<br>Temp Change:<br> ${d.temperature_change} °C`
                        )
                        .style('left', event.pageX + 5 + 'px')
                        .style('top', event.pageY - 28 + 'px');
                })
                .on('mousemove', function (event) {
                    tooltip
                        .style('left', event.pageX + 5 + 'px')
                        .style('top', event.pageY - 28 + 'px');
                })
                .on('mouseout', function (d) {
                    tooltip.transition().duration(500).style('opacity', 0);
                });
        }

        // 创建 tooltip
        // 创建 tooltip
        const tooltip = d3
            .select('body')
            .append('div')
            .attr('class', 'tooltip');
    }
);

// 数据合并函数
function mergeData(co2Data, tempData) {
    return co2Data
        .map((co2) => {
            const temp = tempData.find(
                (t) => t.country === co2.country && t.year === co2.year
            );
            return {
                country: co2.country,
                year: co2.year,
                co2_emissions: +co2.emissions, // 将字符串转换为数字
                temperature_change: temp ? +temp.temperature_change : null, // 处理可能的缺失值
            };
        })
        .filter((d) => d.temperature_change !== null && d.year >= 1880); // 过滤掉没有气温变化的数据
}
