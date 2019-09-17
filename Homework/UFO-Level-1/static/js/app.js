// from data.js
var tableData = data;

// create table
function display() {
    var table = index.createElement("table");
    for (var i=0; i<tableData.length; i++) {
        var row = table.insertRow();
        for (var j=0; j<orderArray[i].length; j++) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(orderArray[i][j]));
        }
    }
    return table;
}

// install packages
npm install nearest-date;
var nearest = require('nearest-date');

// create function
function filterSearch(date){
    var target = new Date(date)
    var filtered = nearest(tableData.datetime, target)
    return tableData.date(filtered)
};

// call function
var dateSearched = tableData.filter(filterSearch);
console.log(dateSearched)

