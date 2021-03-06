'use strict';
console.log('the script is loading');
//global variables: list of stores and list of hours for operations.
//Hours of operaton are the same for all stores.
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
 '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

console.log('the header is going to render');
renderHeaderRow();

//break to new object instances. Or in this case, stores.


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
//below this holds things not in the constructor but used anyway.
  this.salesPerHour = [];
  this.total = 0;

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

  this.cookiesPerDay();

//create it, change content, put it somewhere.
  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);
  console.log('what, me worry?');
  console.log(hours.length);

  for (var i = 0; i < hours.length; i++){
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.cookiesPerHour();
    tableRow.appendChild(hourlyTableData);
  //end of for loop
  }

  totalTableData.textContent = this.total;
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
  var avgSales = Math.round(this.getRandomInt() * this.avgCookies);
  return avgSales;
};

//
CookieStore.prototype.cookiesPerDay = function() {
  var dailyCookieCount;
  for (var i = 0; i < hours.length; i++) {
    dailyCookieCount = this.cookiesPerHour();
    this.total += dailyCookieCount;
    this.salesPerHour.push(dailyCookieCount);
     // there is no return property as I am updating the salesPerHour array
     // I will use that for my rendering.
 //end of for loop
  }
//end of cookiesperDay function
};

CookieStore.prototype.hours = function() {
  console.log('The hours of operation for this store is ' + hours);
  return hours;
};

/********************************************
THIS SECTION BUILDS TABLE AS IT IS WITH STATIC FIGURES
********************************************/

var pike = new CookieStore('1st & Pike', 22, 65, 6.3);
var seatac = new CookieStore('Seatac Airport', 11, 38, 3.7);
var seattleCenter = new CookieStore('Seattle Center', 22, 65, 6.3);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.8);
var storeList = [pike, seatac, seattleCenter, capitolHill, alki];

//now to print the tables to screen
function printStores(){
  for(var i = 0; i < storeList.length; i++)
    storeList[i].toHtml();
};

printStores();


/********************************************
**THIS SECTION BUILDS FORM FOR NEW STORES***
********************************************/
var submitNewStore = document.getElementById('new_store_sales');
var newStoreFigures = [];

submitNewStore.addEventListener('submit', handleStoreSubmission);

function handleStoreSubmission() {
  event.preventDefault();

  var storeName = event.target.new_store_name.value;
  var minCust = event.target.new_store_min_cust.value;
  var maxCust = event.target.new_store_max_cust.value;
  var avgCookies = event.target.new_store_avg_cookies.value;

  var newStore = new CookieStore(storeName, minCust, maxCust, avgCookies);
  newStoreFigures.push(newStore);

  renderNewStore();
//end of handleStoreSubmission function
};

function renderNewStore() {
  var storehouse = document.getElementById('form_printer');
  // var storeNameCell;
  // var minCustCell;
  // var maxCustCell;
  // var avgCookies;

  for(var i = 0; i < newStoreFigures.length; i++) {
    newStoreFigures[i].toHtml();
  }
  newStoreFigures = [];

//end of renderNewStore function
};
