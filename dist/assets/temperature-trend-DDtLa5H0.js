import "./modulepreload-polyfill-DaKOjhqt.js";
/* empty css              */
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const slider = document.getElementById("yearSlider");
const startThumb = document.getElementById("startThumb");
const endThumb = document.getElementById("endThumb");
const sliderRange = document.querySelector(".slider-range");
const startYearInput = document.getElementById("startYear");
const endYearInput = document.getElementById("endYear");
let processedData = [];
let isDragging = null;
let minYear = 1850;
let maxYear = 2024;
let startValue = minYear;
let endValue = maxYear;
d3.json("/temperature-data.json").then(function(data) {
  processedData = data.map((item) => ({
    date: new Date(item.Time, 0),
    mean: +item.mean,
    lower: +item.lower,
    upper: +item.upper
  }));
  const years = processedData.map((d) => d.date.getFullYear());
  minYear = Math.min(...years);
  maxYear = Math.max(...years);
  startValue = minYear;
  endValue = maxYear;
  [startYearInput, endYearInput].forEach((el) => {
    el.min = minYear;
    el.max = maxYear;
  });
  startYearInput.value = minYear;
  endYearInput.value = maxYear;
  updateSliderPositions();
  updateChart();
}).catch(function(error) {
  console.error("Error loading the data:", error);
});
function updateSliderPositions() {
  const totalRange = maxYear - minYear;
  const startPosition = (startValue - minYear) / totalRange * 100;
  const endPosition = (endValue - minYear) / totalRange * 100;
  startThumb.style.left = `${startPosition}%`;
  endThumb.style.left = `${endPosition}%`;
  sliderRange.style.left = `${startPosition}%`;
  sliderRange.style.width = `${endPosition - startPosition}%`;
}
function positionToYear(position) {
  const sliderRect = slider.getBoundingClientRect();
  const percentage = Math.max(0, Math.min(100, (position - sliderRect.left) / sliderRect.width * 100));
  return Math.round(minYear + percentage / 100 * (maxYear - minYear));
}
function updateChart() {
  const filteredData = processedData.filter((d) => {
    const year = d.date.getFullYear();
    return year >= startValue && year <= endValue;
  });
  startYearInput.value = startValue;
  endYearInput.value = endValue;
  drawChart(filteredData);
}
function drawChart(processedData2) {
  d3.select("#left-column svg").remove();
  const margin = { top: 20, right: 100, bottom: 50, left: 80 };
  const width = 800 - margin.left - margin.right;
  const height = 560 - margin.top - margin.bottom;
  const svg = d3.select("#left-column").insert("svg", ".range-container").attr("width", width + margin.left + margin.right + 10).attr("height", height + margin.top + margin.bottom + 20).append("g").attr("transform", "translate(" + (margin.left + 20) + "," + (margin.top + 20) + ")");
  const x = d3.scaleTime().range([0, width]);
  x.domain(d3.extent(processedData2, function(d) {
    return d.date;
  }));
  const yMin = Math.min(d3.min(processedData2, (d) => d.lower), d3.min(processedData2, (d) => d.mean));
  const yMax = Math.max(d3.max(processedData2, (d) => d.upper), d3.max(processedData2, (d) => d.mean));
  const yPadding = (yMax - yMin) * 0.1;
  const y = d3.scaleLinear().domain([yMin - yPadding, yMax + yPadding]).range([height, 0]);
  const yAxisTicks = [];
  const tickCount = 5;
  const tickStep = (yMax - yMin) / (tickCount - 1);
  for (let i = 0; i < tickCount; i++) {
    yAxisTicks.push(yMin + tickStep * i);
  }
  const yAxis = d3.axisLeft(y).tickValues(yAxisTicks).tickFormat((d) => `${d.toFixed(1)} °C`);
  svg.append("g").attr("class", "y-axis").call(yAxis);
  yAxisTicks.forEach((value) => {
    svg.append("line").attr("x1", 0).attr("y1", y(value)).attr("x2", width).attr("y2", y(value)).attr("stroke", "lightgrey").attr("stroke-dasharray", "5,5").attr("stroke-width", 1);
  });
  svg.append("path").datum(processedData2).attr("fill", "none").attr("stroke", "rgb(139,0,0)").attr("stroke-width", 1.5).attr(
    "d",
    d3.line().x((d) => x(d.date)).y((d) => y(d.mean))
  );
  svg.append("path").datum(processedData2).attr("fill", "none").attr("stroke", "rgba(188,143,143,0.8)").attr("stroke-width", 1.5).attr(
    "d",
    d3.line().x((d) => x(d.date)).y((d) => y(d.upper))
  );
  svg.append("path").datum(processedData2).attr("fill", "none").attr("stroke", "rgba(188,143,143,0.8)").attr("stroke-width", 1.5).attr(
    "d",
    d3.line().x((d) => x(d.date)).y((d) => y(d.lower))
  );
  const formatTime = d3.timeFormat("%Y");
  svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x).tickFormat(formatTime));
  svg.selectAll(".tick text").style("text-anchor", "end").attr("transform", "rotate(-45)").attr("dx", "-.8em").attr("dy", ".15em").style("font-size", "14px");
  svg.append("text").attr("transform", "rotate(-90)").attr("x", -height / 2).attr("y", -margin.left + 20).text("Temperature").style("text-anchor", "middle").style("font-size", "14px");
  svg.append("text").attr("x", width / 2).attr("y", -margin.top / 2).attr("text-anchor", "middle").style("font-size", "20px").style("font-weight", "bold").style("fill", "grey").text("Global Temperature Deviation from Baseline");
  let focus = svg.append("g").attr("class", "focus").style("display", "none");
  focus.append("line").attr("class", "vertical-line").style("stroke", "grey").style("stroke-dasharray", "3,3").style("opacity", 0.5).attr("y1", 0).attr("y2", height);
  focus.append("g").attr("class", "labels").selectAll(null).data(["Mean", "Lower", "Upper"]).enter().append("text").attr("class", (d, i) => `label-${i}`).style("fill", "black").style("font-weight", "normal").attr("dx", 8).attr("dy", (d, i) => `${i * 1.2}em`);
  const formatYear = d3.timeFormat("%Y");
  let tooltip = svg.append("g").attr("class", "tooltip").style("display", "none");
  tooltip.append("rect").attr("width", 150).attr("height", 100).attr("fill", "rgba(255, 255, 255, 0.8)").attr("stroke", "black");
  tooltip.append("text").attr("class", "tooltip-year").attr("x", 10).attr("dy", "1.2em").style("fill", "black").style("font-weight", "bold");
  tooltip.append("text").attr("class", "tooltip-mean").attr("x", 10).attr("dy", "3.6em").style("fill", "black");
  tooltip.append("text").attr("class", "tooltip-lower").attr("x", 10).attr("dy", "4.8em").style("fill", "black");
  tooltip.append("text").attr("class", "tooltip-upper").attr("x", 10).attr("dy", "2.4em").style("fill", "black");
  function mousemove(event) {
    let mousePosition = d3.pointer(event, this);
    let x0 = x.invert(mousePosition[0]);
    let i = bisectDate(processedData2, x0, 1);
    let d = x0 - processedData2[i - 1].date > processedData2[i].date - x0 ? processedData2[i] : processedData2[i - 1];
    focus.select(".vertical-line").attr("x1", x(d.date)).attr("x2", x(d.date));
    tooltip.select(".tooltip-year").text(`Year: ${formatYear(d.date)}`);
    tooltip.select(".tooltip-mean").text(`Mean: ${d.mean.toFixed(2)} °C`);
    tooltip.select(".tooltip-lower").text(`Lower: ${d.lower.toFixed(2)} °C`);
    tooltip.select(".tooltip-upper").text(`Upper: ${d.upper.toFixed(2)} °C`);
    let labelX = x(d.date) + 10;
    if (mousePosition[0] > width - 50) {
      labelX = x(d.date) - 160;
    }
    tooltip.attr("transform", `translate(${labelX},${mousePosition[1] - 50})`);
    tooltip.style("display", null);
  }
  function bisectDate(array, x2, lo = 0, hi = array.length) {
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (array[mid].date < x2) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  svg.append("rect").attr("class", "overlay").attr("width", width).attr("height", height).style("fill", "none").style("pointer-events", "all").on("mouseover", () => focus.style("display", null)).on("mouseout", () => {
    focus.style("display", "none");
    tooltip.style("display", "none");
  }).on("mousemove", mousemove);
}
slider.addEventListener("mousedown", function(e) {
  startThumb.getBoundingClientRect();
  endThumb.getBoundingClientRect();
  if (e.target === startThumb) {
    isDragging = "start";
  } else if (e.target === endThumb) {
    isDragging = "end";
  }
});
document.addEventListener("mousemove", function(e) {
  if (!isDragging) return;
  const newYear = positionToYear(e.clientX);
  if (isDragging === "start" && newYear < endValue) {
    startValue = newYear;
  } else if (isDragging === "end" && newYear > startValue) {
    endValue = newYear;
  }
  updateSliderPositions();
  updateChart();
});
document.addEventListener("mouseup", function() {
  isDragging = null;
});
startYearInput.addEventListener("change", function() {
  let value = parseInt(this.value);
  if (value >= minYear && value < endValue) {
    startValue = value;
    updateSliderPositions();
    updateChart();
  } else {
    this.value = startValue;
  }
});
endYearInput.addEventListener("change", function() {
  let value = parseInt(this.value);
  if (value <= maxYear && value > startValue) {
    endValue = value;
    updateSliderPositions();
    updateChart();
  } else {
    this.value = endValue;
  }
});
