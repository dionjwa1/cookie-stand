'use strict';

//console.log('Yo');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustomerEachHour: 23,
  maxCustomerEachHour: 65,
  avgCookieSoldPerCustomer: 6.3,
  cookiesSoldPerCustomerArry: [],
  dailyStoreTotal: 0,
  randomCustomerEachHour: function () {
    console.log('at randomCustomerEachHour works');
    return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
  },
  //method to cal and populate # of cookies sold per hour
  calcCookiesSoldEachHour: function () {
    // console.log(randomCookiesSoldPerHour);
    for (let i = 0; i < hours.length; i++) {
      let randomCookiesSoldPerHour = this.randomCustomerEachHour();
      this.cookiesSoldPerCustomerArry.push(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer);
    }

  },

  render: function () {
    this.calcCookiesSoldEachHour();
    console.log('I am in the render method');
    let myContainer = document.getElementById('container');
    console.log(myContainer);
    let div= document.createElement('h2');
    let ul = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      let h2 = document.createElement('h2');
      li.innerHTML = hours[i] + ' ' + this.cookiesSoldPerCustomerArry[i];
      h2.innerHTML = `Seattle`;
      ul.append(li);
      div.append(h2);

    }
    myContainer.append(ul);
  },
};
console.log(seattle.cookiesSoldPerCustomerArry);
let cookieCount = [hours[0] + seattle.cookiesSoldPerCustomerArry[0]];
console.log(cookieCount);





// let tokyo = {
//   name: 'Tokyo',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomer: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour) + this.minCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     console.log(randomCustomerForOneHour);
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomer: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour) + this.minCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     console.log(randomCustomerForOneHour);
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//   }
// };

// let paris = {
//   name: 'Paris',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomer: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour) + this.minCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     console.log(randomCustomerForOneHour);
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//   }
// };

// let lima = {
//   name: 'Lima',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomer: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour) + this.minCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     console.log(randomCustomerForOneHour);
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//   }
// };

seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


// let ul = document.createElement('ul');
// <li id="seattle"

