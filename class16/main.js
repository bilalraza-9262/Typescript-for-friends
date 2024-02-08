"use strict";
// IIFE
// (function (x: number, y: number) {
// 	console.log(x + y);
// })(2, 3);
// FOREACH
let myArr = [1, 2, 3, 4, 5];
// let func=myArr.forEach((value)=> value>3? console.log(value):console.log("invalid number"))
// console.log(func);
myArr.forEach((value) => value > 3 ? console.log(value) : console.log("invalid number"));
