"use strict";
//LOOP
let myArr = ["bilal", "hammad", "fawad"];
// for (let i = 0; i < myArr.length; i++) {
// 	if (myArr[i] === "bilal") {
// 		console.log("invalid user\n");
// 	} else {
// 		console.log(`Welcome ${myArr[i].toUpperCase()}`);
// 	}
// }
// for (let index = 0; index < myArr.length; index++) {
// 	console.log(" outer loop");
// 	for (let i = 0; i < myArr.length; i++) {
// 		console.log("inner loop");
// 	}
// }
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const value of arr2) {
    if (value % 2 === 0) {
        console.log("Even Numbers ", value);
    }
}
let myObj = {
    names: "Jami",
    age: 19,
    skills: "Developer"
};
let key;
for (key in myObj) {
    if (myObj[key] === "Jami") {
        console.log();
    }
}
console.log(myObj["age"]);
//OBJECT DE-STRUCTURING
const { names: my_name, age: my_age, skills: my_skills } = myObj;
console.log(my_name);
console.log(my_age);
