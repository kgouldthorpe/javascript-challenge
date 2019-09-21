// install packages for search box
npm install nearest-date;
var nearest = require('nearest-date');

// create function for search box
function filterSearch(date){
    var target = new Date(date)
    var filtered = nearest(tableData.datetime, target)
    return tableData.date(filtered)
};

// call function
var dateSearched = tableData.filter(filterSearch);
console.log(dateSearched)
