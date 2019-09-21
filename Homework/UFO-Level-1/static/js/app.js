// from data.js
var tableData = data;

// create table with data.js
var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
});


