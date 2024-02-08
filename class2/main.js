// operators
// 1- Arthimetic operator
console.log(5 + 5);
console.log(5 * 5);
console.log(10 - 5);
console.log(10 / 2);
console.log(5 % 2);
console.log(Math.pow(5, 4));
var i = 2;
console.log(i);
// i++ // same as i = i+1
console.log(++i);
console.log(--i); //same as i = i-1
// Assignment Operators
// "="
var num1 = 2;
console.log(num1);
// "+="
var num2 = 1;
num2 += num1; //same as num2 = num2 + num1
console.log(num2);
// "+="
var num3 = 5;
num3 -= num1; //same as num3 = num3 - num1
console.log(num3);
// "*="
var num4 = 3;
num4 *= num1; //same as num3 = num3 * num1
console.log(num4);
// "/="
var num5 = 10;
num5 /= num1; //same as num3 = num3 / num1
console.log(num5);
// "%="
var num6 = 9;
num6 %= num1; //same as num3 = num3 % num1
console.log(num6);
var num7 = 5;
num7 = Math.pow(num7, num1);
console.log(num7);
var myNum = 4;
// COMPARISON
// "=="
var number = 4;
var number2 = 4;
console.log(number !== number2);
// "==="
var names = "bilal";
var friend = "Bilal";
// console.log(names===friend);
// ">"
console.log(number < number2);
// "<"
console.log(number > number2);
// "<="
console.log(number <= number2);
// ">="
console.log(number >= number2);
// if and else statement
var age = 10;
var myname;
if (age <= 15) {
    // console.log("kids");
    if (age <= 10) {
        console.log("little kid");
    }
    else {
        console.log("underage");
    }
}
else if (age <= 50) {
    myname = "bvila";
    console.log(myname);
}
else if (age <= 100) {
    console.log("not man");
}
else {
    console.log("invalid age");
}
// console.log(myname);
//                      5   +   5     +    3
var myNum2 = ++myNum + myNum-- + --myNum;
console.log(myNum2--);
