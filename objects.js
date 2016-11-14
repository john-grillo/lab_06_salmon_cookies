'use strict';
console.log('i opend');
var cookieStore = {
  name: 'Salmon Cookies'
  , hours: ['7am', '8am', '9am', '10am', '11am', '12pm']

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

cookieStore.listHours();
