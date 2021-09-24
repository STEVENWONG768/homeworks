// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

var inputField1 = d3.select("#datetime");
//var inputField2 = d3.select("#city");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// table building 
var populate = (dataInput) => {

	dataInput.forEach(ufo_sightings => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
}

var form = d3.select("#form");
populate(data);
button.on("click", runEnter);
form.on("submit",runEnter);

// filter function for button
function runEnter(){
	console.log("form");
	d3.event.preventDefault();
	var inputDate = inputField1.property("value").trim();
	//var inputCity = inputField2.property("value").trim();
	var filteredData = data.filter(data => data.datetime === inputDate);
	//var filteredData = data.filter(data=> data.City === inputCity);
	console.log(filteredData); 
	tbody.html("");
	populate(filteredData);


}
d3.select("#filter-btn").on("click", runEnter);




  
   

   

