'use strict';
//getRandomInt is used to create customers.

var pike = {
  name: '1st and Pike'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 23
  , maxCustomers: 65
  , projectedSales: 6.3
  , salesPerHour: []
  , whatHours: function() {
      console.log('I am open at certain hours: ' + this.hours);
    }
  , getRandomInt: function() {
      var min = Math.ceil(this.minCustomers);
      var max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min)) + min;
  }
  , //this random integer generator will create cookie sales per hr.
    cookiesPerHour: function() {
      var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
      return avgSales;
    }

//end of 1st & Pike
};


var seatac = {
  name: 'SeaTac Airport'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 3
  , maxCustomers: 24
  , projectedSales: 1.2
  , salesPerHour: []
  , whatHours: function() {
      console.log('I am open at certain hours: ' + this.hours);
    }
  , getRandomInt: function() {
      var min = Math.ceil(this.minCustomers);
      var max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min)) + min;
  }
  , //this random integer generator will create cookie sales per hr.
    cookiesPerHour: function() {
      var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
      return avgSales;
    }

//end of seatac
};

var seattleCenter = {
  name: 'Seattle Center'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 11
  , maxCustomers: 38
  , projectedSales: 3.7
  , salesPerHour: []
  , whatHours: function() {
      console.log('I am open at certain hours: ' + this.hours);
    }
  , getRandomInt: function() {
      var min = Math.ceil(this.minCustomers);
      var max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min)) + min;
  }
  , //this random integer generator will create cookie sales per hr.
    cookiesPerHour: function() {
      var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
      return avgSales;
    }

//end of seattleCenter
};

var capitolHill = {
  name: 'Capitol Hill'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 20
  , maxCustomers: 38
  , projectedSales: 2.3
  , salesPerHour: []
  , whatHours: function() {
      console.log('I am open at certain hours: ' + this.hours);
    }
  , getRandomInt: function() {
      var min = Math.ceil(this.minCustomers);
      var max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min)) + min;
  }
  , //this random integer generator will create cookie sales per hr.
    cookiesPerHour: function() {
      var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
      return avgSales;
    }

//end of capitolHill
};

var alki = {
  name: 'Alki'
  , hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
   '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
  , minCustomers: 2
  , maxCustomers: 16
  , projectedSales: 4.6
  , salesPerHour: []
  , whatHours: function() {
      console.log('I am open at certain hours: ' + this.hours);
    }
  , getRandomInt: function() {
      var min = Math.ceil(this.minCustomers);
      var max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min)) + min;
  }
  , //this random integer generator will create cookie sales per hr.
    cookiesPerHour: function() {
      var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
      return avgSales;
    }

//end of capitolHill
};


//where it's all written to the DOM.
var storeList = [pike, seatac, seattleCenter, capitolHill, alki];
function printSalesFigures() {
  var contentArea = document.getElementById('content_area');

//for loop for stores, looping through each store in array storeList.
  for(var k = 0; k < storeList.length; k++){
    var totalCookiesPerDay = 0;
    console.log(storeList[k].name);

    var ul = document.createElement('ul');
    ul.innerHTML = '<h2><u>' + storeList[k].name + '</u></h2>';

    // console.log(storeList[k].hours.length);
    //this loop prints the hours and the sales figures per hour.
    for(var i = 0; i < storeList[k].hours.length; i++){
      var li = document.createElement('li');
      console.log('the hours area : ', storeList[k].hours.length);
      var freshBake = storeList[k].cookiesPerHour();

      li.textContent += storeList[k].hours[i];
      li.textContent += ': ' + freshBake + ' cookies';
      ul.appendChild(li);
      totalCookiesPerDay += freshBake;
    //end of inner for loop
    }

    li = document.createElement('li');
    li.innerHTML = '<strong>Total ' + totalCookiesPerDay + '</strong>';
    ul.appendChild(li);
    contentArea.appendChild(ul);
    totalCookiesPerDay = 0;
//end of outer for-loop
  }

  li.textContent += 'cookies';
//END OF FUNCTION printSalesFigures
}

printSalesFigures();
