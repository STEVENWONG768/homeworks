// @TODO: YOUR CODE HERE!
var svgWidth = 800;
var svgHeight = 560;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", 'translate(${margin.left}, ${margin.top})');

    d3.csv("C:/Users/steve/Documents/bootcamp/nu-chi-data-pt-04-2021-u-c/02-Homework/16-D3/Instructions/StarterCode/assets/data/data.csv")
    .then(function(healthdata) {
        healthdata.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
      });
// CREATE SCALE
var xLinearScale = d3.scaleLinear()
      .domain([8, d3.max(healthdata, d => d.poverty*1.2)])
      .range([0, width]);

var yLinearScale = d3.scaleLinear()
    .domain([2, d3.max(data,function(d){
    return +d.healthcare;
    })])
    .range([height, 0]);

var bottomAxis = d3.axisBottom(xLinearScale);
var leftAxis = d3.axisLeft(yLinearScale);


chartGroup.append("g")
    .attr("transform", 'translate(0, ${height}')
    .call(bottomAxis);
chartGroup.append("g")
    .call(leftAxis);
var circlesGroup = chartGroup.selectAll("circle").data(healthdata).enter();
  
    circlesGroup.append("circle")
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", "15")
    .attr("fill", "lightblue")
    .attr("opacity", ".9")
    .on("click", d => toolTip.show(d));

chartGroup.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d,i) => xScale(d.poverty))
    .attr("y", d => (yScale(d.healthcare-0.28)))
    .classed("stateText", true)
    .text(d => d.abbr)
    .on("mouseover", function(d) {
        toolTip.show(d);
    })
    .on("mouseout", function(d,i) {
        toolTip.hide(d);
    });

chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - height / 2)
    .attr("dy", "1em")
    .classed("aText", true)
    .attr("data-axis-name", "healthcare")
    .text("Lacks Healthcare(%)");

chartGroup.append("text")
    .attr("transform", "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")")
    .attr("data-axis-name", "poverty")
    .classed("aText", true)
    .text("In Poverty (%)");

var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([-10, 30])
    .html(function(d) {
        return ('${d.abbr}<br>Healthcare (%): ${d.healthcare}%<br>Poverty: ${d.poverty}');
    });

chartGroup.call(toolTip);

circlesGroup.on("mouseover", function(d) {
    toolTip.show(d);
})
    .on("mouseout", function(d, i){
        toolTip.hide(d);
    });

});
