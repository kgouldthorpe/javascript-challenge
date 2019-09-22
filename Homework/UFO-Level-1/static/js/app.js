// from data.js
var tableData = data;

// create table with data.js
var tbody = d3.select("tbody");

console.log(tableData);

function fillTable(rowData){
  rowData.forEach(function(alienReport) {
    console.log(alienReport);

    var row = tbody.append("tr");

    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

fillTable(tableData);

// clear data & set up for entering filtered data
function clearData(){
  tbody.html("");
};

function newTable(rowData){
  clearData();
  rowData.forEach(function(alienReportNew) {
    console.log(alienReportNew);

    var row = tbody.append("tr");

    Object.entries(alienReportNew).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });      
};

// operate search button
var button = d3.select("#filter-btn");

var userDate = d3.select("#datetime");

button.on("click", function(){
  d3.event.preventDefault();
  var userInput = userDate.property("value");
  console.log(userInput);
  
  if (userInput) {
    var filterData = tableData.filter(searched => searched.datetime === userInput);
    console.log(filterData);
  };
  newTable(filterData);
});
