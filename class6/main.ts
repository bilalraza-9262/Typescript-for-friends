//Best practice for variable naming

//space not allowed
//tittle case not allowed
//number not alloweed in starting
//special characters are allowed in starting

// case not allowed
// let Arr="bilal"
// let 1arr=""
// let my arr=""

// case  allowed
let $arr = "bilal"
let my_name = ""

//ARRAY

//define array typing

// Array<string|number>
// string[]
// number[]
// new Array([])

//ARRAY MRTHODS

let arr: string[] = ["javscript", "python"]

// arr.pop()

console.log(arr.length);

arr.push("Typescript")

// arr.shift()

// arr.unshift("PHP")

console.log(arr.join(" "));

console.log(arr.slice(0, 1))//return method

arr.splice(0, 0, "java", "C#")

console.log(arr);

let arr2 = ["Ruby", "C", "urdu", "English"]

let arr3: number[] = [5, 3, 1, 8, 2]

arr3.sort()

console.log(arr3);

//LOOP
let myArr: number[] = [1, 21, 43467, 8789, 89, 423, 7879, 7231, 22]

console.log(myArr[1]);

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === 89) {
        console.log("89 is not allowed");

    } else {
        console.log(myArr[i]);

    }

}
