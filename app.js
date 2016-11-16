'use strict';
console.log('the script is loading');
//global variables: list of stores and list of hours for operations.
//Hours of operaton are the same for all stores.
var storeList = ['pike', 'seatac', 'seattleCenter', 'capitolHill', 'alki', 'TOTALS'];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
 '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

console.log('the header is going to render');
renderHeaderRow();

//functions to build a table.
//this code creates a header row for the table.
//this bloc was written by Aaron
function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  blankTableHeader.innerHTML = '<th>Store Name \&dArr; || Store Hours \&rArr;</th>';
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
};



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
// this bloc creates the structure of the table.
CookieStore.prototype.toHtml = function() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');
  var hourlyTableData;

//create it, change content, put it somewhere.
  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.hours.length; i++){
    hourlyTableHeader = document.createElement('td');
    hourlyTableData.textContent = this.salesPerHour();
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

//create an array of cookies stored per hour and put into an array
CookieStore.prototype.salesPerHour = function() {
  console.log('Here are the sales projections per hour');
  var salesTracker = [];

  //purpose of for loop is to populate the salesTracker array
  for(var i = 0; i < hours.length; i++) {
    salesTracker.push(this.cookiesPerHour());
  //end of for loop
  }

//end of salesPerHour
};



//break to new object instances. Or in this case, stores.
var pike = new CookieStore('1st & Pike', 22, 65, 6.3);
var seatac = new CookieStore('Seatac Airport', 11, 38, 3.7);
var seattleCenter = new CookieStore('Seattle Center', 22, 65, 6.3);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.8);
