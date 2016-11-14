'use strict';
var cookieStore = {
  name: 'Salmon Cookies'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

  , whatHours: function() {
    console.log('I am open at certain hours: ' + this.hours);
    }
  // , sum: function(a, b){
  //    return a + b;
  //   }
  , //you can write it as 'listHours()' thanks to the ES6 shorthand.
  listHours: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var li;

    for ( var i = 0; i < this.hours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.hours[i];
      ul.appendChild(li);

    }
    li.textContent += 'TEST LINE ITEM';
    contentArea.appendChild(ul);

  }

//end object cookieStore
};

var pike = {
  name: '1st and Pike'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 23
  , maxCustomers: 65
  , avgCookieSales: 3.6
  , whatHours: function() {
      console.log('I am open at certain hours: ' + this.hours);
    }
  , getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

//end of 1st & Pike
};

var seatac = {
  name: 'SeaTac Airport'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 3
  , maxCustomers: 24
  , avgCookieSales: 1.2
  , whatHours: function() {
      console.log('SeaTac Airport is open at: ' + this.hours);
    }
  , getRandomInt: function(minCustomers, maxCustomers) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

//end of seatac object
};

var seattleCenter = {
  name: 'Seattle Center'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 11
  , maxCustomers: 38
  , avgCookieSales: 3.7
  , whatHours: function() {
      console.log('Seattle Center open at these certain hours: ' + this.hours);
    }
  , getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

//end of Seattle Center object
};

var capitolHill = {
  name: 'Capitol Hill'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 20
  , maxCustomers: 38
  , avgCookieSales: 2.3
  , whatHours: function() {
      console.log('Capitol Hill open at these certain hours: ' + this.hours);
    }
  , getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

//end of Capitol Hill object
};

var alki = {
  name: 'Alki'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 2
  , maxCustomers: 16
  , avgCookieSales: 4.6
  , whatHours: function() {
      console.log('Alki open at these certain hours: ' + this.hours);
    }
  , getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

//end of Capitol Hill object
};

//cookieStore.listHours();
