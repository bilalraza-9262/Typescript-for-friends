"use strict";
//NUMBER
let my_num = 233.4;
let original_num = new Number(2);
let num2 = "3";
// let num3=+num2
let num3 = Number.parseInt(num2);
console.log(num3 + 3);
console.log(my_num);
console.log(original_num);
//number methods
console.log(isNaN(num3));
console.log(my_num.toFixed());
console.log(my_num.toString());
console.log(my_num.toPrecision(2));
//MATH
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.2));
console.log(Math.round(4.7));
console.log(Math.max(1, 4, 6, 2, 9));
console.log(Math.min(1, 4, 6, 2, 9));
console.log(Math.round(Math.random() * 10) + 10);
console.log(Math.sign(-4));
