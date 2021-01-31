'use strict';

//console.log('Yo');
let myContainer = document.getElementById('container');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const allCities = [];


let img = document.createElement('img');
img.src = 'img/lab6SalmonCookie.png';
img.title = 'Two Tasty Salmon Cookies';
img.className = 'salmon-cookie';
myContainer.appendChild(img);

// myContainer.append(img);
function CookieCity(name, minCustomers, maxCustomers, avgCookiesSold) {
  this.name = name;
  this.minCustomerEachHour = minCustomers;
  this.maxCustomerEachHour = maxCustomers;
  this.avgCookieSoldPerCustomer = avgCookiesSold;
  this.cookiesSoldPerCustomerArry = [];
  this.dailyStoreTotal = 0;
  allCities.push(this);
}

CookieCity.prototype.randomCustomerEachHour = function () {
  // console.log('at randomCustomerEachHour works');
  return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
};
//method to cal and populate # of cookies sold per hour
CookieCity.prototype.calcCookiesSoldEachHour = function () {
  // console.log(randomCookiesSoldPerHour);
  for (let i = 0; i < hours.length; i++) {
    let randomCookiesSoldPerHour = this.randomCustomerEachHour();
    let hourlyTotal = Math.ceil(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer);
    this.cookiesSoldPerCustomerArry.push(hourlyTotal);
    this.dailyStoreTotal += hourlyTotal;
  }
};

CookieCity.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  // console.log('I am in the render method');
  // console.log(myContainer);

  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.innerHTML = this.name;
  tr.append(th);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');

    td.innerHTML = this.cookiesSoldPerCustomerArry[i];

    tr.append(td);

  }
  let td = document.createElement('td');

  td.innerHTML = this.dailyStoreTotal;


  tr.append(td);
  myContainer.append(tr);
};
function renderHeader() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.innerHTML = ' ';
  tr.append(th);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.innerHTML = hours[i];
    tr.append(td);
  }
  let td = document.createElement('td');
  td.innerHTML = 'Daily Store Total';
  tr.append(td);
  myContainer.append(tr);
}

function renderFooter() {
  let tr = document.createElement('tr');
  let tf = document.createElement('tf');
  tf.innerHTML = ' ';
  tr.append(tf);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tf.innerHTML = hours[i];
    tr.append(td);
  }
  let td = document.createElement('td');
  td.innerHTML = 'Hourly Store Total';
  tr.append(tf);
  myContainer.append(tr);
}
new CookieCity('Seattle', 23, 65, 6.3);
new CookieCity('Tokyo', 3, 24, 1.2);
new CookieCity('Dubai', 11, 38, 3.7);
new CookieCity('Paris', 20, 38, 2.3);
new CookieCity('Lima', 2, 16, 4.6);

function renderTable() {
  renderHeader();
  for (let i = 0; i < allCities.length; i++) {
    allCities[i].render();
  }
}
renderTable();

// let th = document.createElement('tr');
//     for (let i = 0; i < hours.length; i++) {
//       let th = document.createElement('tr');

//       th.innerHTML = hours[i];

//       th.append(tr);



// let seattle = {
//   // name: 'Seattle',
//   // minCustomerEachHour: 23,
//   // maxCustomerEachHour: 65,
//   // avgCookieSoldPerCustomer: 6.3,
//   // cookiesSoldPerCustomerArry: [],
//   // dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     // console.log('at randomCustomerEachHour works');
//     return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
//   },
//   //method to cal and populate # of cookies sold per hour
//   calcCookiesSoldEachHour: function () {
//     // console.log(randomCookiesSoldPerHour);
//     for (let i = 0; i < hours.length; i++) {
//       let randomCookiesSoldPerHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerCustomerArry.push(Math.ceil(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer));
//     }
//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//     let myContainer = document.getElementById('container');
//     console.log(myContainer);

//     let ul = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');

//       li.innerHTML = hours[i] + ':' + this.cookiesSoldPerCustomerArry[i];

//       ul.append(li);

//     }
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     p.innerHTML = `Seattle`;
//     h1.append(p);
//     myContainer.append(h1, ul);
//   },
// };
// console.log(seattle.cookiesSoldPerCustomerArry);
// let cookieCount = [hours[0] + seattle.cookiesSoldPerCustomerArry[0]];
// console.log(cookieCount);

// let tokyo = {
//   name: 'Tokyo',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomerArry: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
//   },
//   //method to cal and populate # of cookies sold per hour
//   calcCookiesSoldEachHour: function () {
//     // console.log(randomCookiesSoldPerHour);
//     for (let i = 0; i < hours.length; i++) {
//       let randomCookiesSoldPerHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerCustomerArry.push(Math.ceil(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer));
//     }

//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//     let myContainer = document.getElementById('container');
//     console.log(myContainer);

//     let ul = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');

//       li.innerHTML = hours[i] + ' : ' + this.cookiesSoldPerCustomerArry[i];

//       ul.append(li);

//     }
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     p.innerHTML = `Tokyo`;
//     h1.append(p);
//     myContainer.append(h1, ul);
//   },
// };

// let dubai = {
//   name: 'Dubai',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomerArry: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
//   },
//   //method to cal and populate # of cookies sold per hour
//   calcCookiesSoldEachHour: function () {
//     // console.log(randomCookiesSoldPerHour);
//     for (let i = 0; i < hours.length; i++) {
//       let randomCookiesSoldPerHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerCustomerArry.push(Math.ceil(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer));
//     }

//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//     let myContainer = document.getElementById('container');
//     console.log(myContainer);

//     let ul = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');

//       li.innerHTML = hours[i] + ' : ' + this.cookiesSoldPerCustomerArry[i];

//       ul.append(li);

//     }
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     p.innerHTML = `Dubai`;
//     h1.append(p);
//     myContainer.append(h1, ul);
//   },
// };

// let paris = {
//   name: 'Paris',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomerArry: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
//   },
//   //method to cal and populate # of cookies sold per hour
//   calcCookiesSoldEachHour: function () {
//     // console.log(randomCookiesSoldPerHour);
//     for (let i = 0; i < hours.length; i++) {
//       let randomCookiesSoldPerHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerCustomerArry.push(Math.ceil(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer));
//     }

//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//     let myContainer = document.getElementById('container');
//     console.log(myContainer);

//     let ul = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');

//       li.innerHTML = hours[i] + ' : ' + this.cookiesSoldPerCustomerArry[i];

//       ul.append(li);

//     }
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     p.innerHTML = `Paris`;
//     h1.append(p);
//     myContainer.append(h1, ul);
//   },
// };

// let lima = {
//   name: 'Lima',
//   minCustomerEachHour: 23,
//   maxCustomerEachHour: 65,
//   avgCookieSoldPerCustomer: 6.3,
//   cookiesSoldPerCustomerArry: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function () {
//     console.log('at randomCustomerEachHour works');
//     return Math.round(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
//   },
//   //method to cal and populate # of cookies sold per hour
//   calcCookiesSoldEachHour: function () {
//     // console.log(randomCookiesSoldPerHour);
//     for (let i = 0; i < hours.length; i++) {
//       let randomCookiesSoldPerHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerCustomerArry.push(Math.ceil(randomCookiesSoldPerHour * this.avgCookieSoldPerCustomer));
//     }

//   },

//   render: function () {
//     this.calcCookiesSoldEachHour();
//     console.log('I am in the render method');
//     let myContainer = document.getElementById('container');
//     console.log(myContainer);

//     let ul = document.createElement('ul');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');

//       li.innerHTML = hours[i] + ' : ' + this.cookiesSoldPerCustomerArry[i];

//       ul.append(li);

//     }
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     p.innerHTML = `Lima`;
//     h1.append(p);
//     myContainer.append(h1, ul);
//   },
// };


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
