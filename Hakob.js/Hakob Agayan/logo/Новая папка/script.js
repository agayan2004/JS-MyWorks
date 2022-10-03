'use strict';
// var user = {
//   name: 'Mike',
//   age: 45,
//   'email address': ''
// };
// var user2 = {};
// user2['name'] = 'Mike';
// console.log('email' in user);
// for (var key in user) {
//   user2[key] = user[key];
// }
// var esse = {
//       name: "Edgar",
//       firstName: "Sukiasyan",
//       gender: "male",
//       age: 39,
//       address: "Bashinjaghyan 16",
//       phone: 37477611462,
//       weight: null,
//       otherInf: {
//           speciality: "Med Doctor",
//           famStatus: "single",
//           favColor: "black",
//           favMashine: "Mersedes",
//           anotherSpec: "Js studing",
//           hobby1: "reeding",
//           hobby2: "Sinema",
//           hobby3: "football",
//           favTeam: "Real Madrid"
//       },
//       workPlace: "maternity hospital"
// };
// for (var i in esse) {
//   if (typeof esse[i] == 'object' && esse[i] !== null) {
//     // console.log(esse[i]);
//     for (var key in esse[i]) {
//       console.log(esse[i][key]);
//     }
//   }
// }

// var user = {
//   name: 'Mike',
//   child: {
//     name: 'Kevin',
//     age: 25
//   }
// };
//
// console.log(user.child.age);
// console.log(user['child']['age']);



// var car1 = {};
// car1.brand = 'Mercedes';
// car1.year = 2000;
// car1.price = '5000$';
//
// // car1['brand'] = 'Mercedes';
// var car2 = {
//   brand: 'BMW',
//   year: 2000,
//   price: '5001$'
// };
//
// for (var i in car1) {
//   console.log(i + ' : ' + car1[i]);
// }
// console.log('');
// for (var i in car2) {
//   console.log(i + ' : ' + car2[i]);
// }

var table = {
  color: 'blue',
  price: 2000,
  weight: '40kg',
  type: 'oval'
};
var obj = {};
for (var i in table) {
  if (typeof table[i] === 'string') {
    obj[i] = table[i];
  }
}
console.log(obj);

function count(x) {

}
count(table);
count({name: '', age: 45});


// function fibonachi(n, num1, num2) {
//   if (n > 0) {
//     console.log(num1);
//     fibonachi(--n, num1 + num2, num1);
//   }
// }
// fibonachi(15, 0, 1);

var user = {
  name: 'Mike',
  age: 45
}
var user2 = {
  name: 'Mike',
  email: '45'
}
