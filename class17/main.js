"use strict";
// diffrence between arrow function and simple function
Object.defineProperty(exports, "__esModule", { value: true });
let subtract = (num1, num2) => { return num1 - num2; };
let adding = (num1, num2) => num1 + num2;
const obj = {
    errorfunc: () => {
        console.log(this);
    }
};
obj.errorfunc();
// errorfunc()
// console.log(subtract(1, 3));
// console.log(adding(4, 6));
//HOISTING
add(1, 5);
function add(num1, num2) {
    console.log(num1 + num2);
}
// myFunc() error
let myFunc = function () {
    // console.log("hello");
};
