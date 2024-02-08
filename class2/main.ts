// operators

// 1- Arthimetic operator

console.log(5 + 5);
console.log(5 * 5);
console.log(10 - 5);
console.log(10 / 2);
console.log(5 % 2);
console.log(5 ** 4);

let i: number = 2
console.log(i);

// i++ // same as i = i+1
console.log(++i);

console.log(--i);//same as i = i-1

// Assignment Operators
// "="
let num1: number = 2
console.log(num1);

// "+="
let num2: number = 1;
num2 += num1 //same as num2 = num2 + num1
console.log(num2);

// "+="
let num3: number = 5;
num3 -= num1 //same as num3 = num3 - num1
console.log(num3);

// "*="
let num4: number = 3
num4 *= num1//same as num3 = num3 * num1
console.log(num4);

// "/="
let num5: number = 10
num5 /= num1//same as num3 = num3 / num1
console.log(num5);

// "%="
let num6: number = 9
num6 %= num1//same as num3 = num3 % num1
console.log(num6);

let num7: number = 5
num7 **= num1
console.log(num7);

let myNum: number = 4


// COMPARISON

// "=="
let number: number = 4
let number2: number = 4
console.log(number !== number2);

console.log(!true);

// "==="
let names: string = "bilal"
let friend: string = "Bilal"
// console.log(names===friend);

// ">"
console.log(number > number2);

// "<"
console.log(number < number2);

// "<="
console.log(number <= number2);

// ">="
console.log(number >= number2);
var myname: string;
// if and else statement

let age: number = 10

if (age <= 1) {
    // console.log("kids");

    if (age <= 0) {
        console.log("little kid");

    } else {
        console.log("underage");

    }

} else if (age <= 20) {

    myname = "bvila"
    console.log(myname);

} else if (age <= 50) {

    console.log("not man");

} else {
    console.log("invalid age");

}
// console.log(myname);

//                      5   +   5     +    3
let myNum2: number = ++myNum + myNum-- + --myNum
console.log(myNum2--);