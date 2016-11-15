'use strict';
//global variables: list of stores and list of hours for operations.
//Hours of operaton are the same for all stores.
var storeList = ['pike', 'seatac', 'seattleCenter', 'capitolHill', 'alki', 'TOTALS'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
 '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];




renderHeaderRow();
console.log('the script is loading');

//functions to build a table.
//this code creates a header row for the table.
function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  // var nameTableHeader = document.createElement('th');
  // var totalTableData = document.createElement('td');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < hours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }

  totalTableHeader.textContent = 'Total';
  tableRow.appendChild(totalTableHeader);
  storeTable.appendChild(tableRow);

//end of renderHeaderRow
}

//this function will create the rows/body of a table





//REMEMBER: Functions go on prototypes, properties go on constructors.

// The folloing is the CookieStore constructor function.
// the storeList = [pike, seatac, seattleCenter, capitolHill, alki]
// 'this' refers to the object being constructed for you
// it also changes when you use the 'new' reserved word to make a
// new instance of the object
function CookieStore(storeName, minCust, maxCust, avgCookies) {
  //var this = {};
  this.name = storeName;
  //return this;

  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;

//end of CookieStore construction function
}

//AND NOW THE PROTOTYPE METHODS SECTION

// Adding a new prototype to the global namespace in order to save memory.
CookieStore.prototype.logStoreName = function() {
  console.log(this.name);
};

//toHtml
CookieStore.prototype.toHtml = function() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('td');
  var totalTableData = document.createElement('th');
  var hourlyTableHeader;

//create it, change content, put it somewhere.
  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.hours.length; i++){
    hourlyTableHeader = document.createElement('td');
    hourlyTableData.textContent = 5;
    tableRow.appendChild(hourlyTableData);
  //end of for loop
  }

  totalTableData.textContent = 15;
  tableRow.appendChild(totalTableData);

  console.log(tableRow, storeTable);
  storeTable.appendChild(tableRow);

//end of toHtml prototype method.
};

//get random integer function for customer creation and sales.
CookieStore.prototype.getRandomInt = function()  {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
//end of getRandomInt prototype.
};

CookieStore.prototype.cookiesPerHour = function() {
  var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
  return avgSales;
};

CookieStore.prototype.hours = function() {
  console.log('The hours of operation for this store is ' + hours);
  return hours;
};

//break to new object instances.
