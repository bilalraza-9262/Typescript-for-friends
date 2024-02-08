//STACK (PRIMITIVE)

let number1: number = 2
let number2: number = number1
number2 = 5
console.log(number1);
console.log(number2);

//HEAP (Non Primitive)

let myArrr: number[] = [1, 2, 3, 6, 7]
let myArr2: number[] = myArrr
myArr2[3] = 1
myArr2.push(8)
console.log(myArrr);
console.log(myArr2);


// let string:string =""
// console.log(string);

// OBJECT

// 1- SINGLETON
// 2- LITERALS OBJECTS



interface Student {
    student_name: string,
    student_id: number,
    courses: {
        course1: string,
        course2: [{ bilalCourse: string, ArafatCourse: string }, {
            JamiCourse: string,
            HuzairCourse: string
        }], course3: [string, string]
    }
}


let student = {
    student_name: "Fahad",

    student_id: 3,

    courses: {

        course1: "Web",

        course2: [{

            bilalCourse: "Ai",
            ArafatCourse: "Pythhon"

        }, {
            JamiCourse: "Java",
            HuzairCourse: "Typescript"
        }],

        course3: function () {
            console.log(`your name is ${this.student_name}`);

        }

    }
}

let names = Symbol("key1")

let peron = {
    [names]: "fawad",
    education: "Matric",
    hobbies: ["Cricket", "Football", "Gaming"]
}

console.log(peron[names]);
console.log(peron["hobbies"][0]);
console.log(peron);


let myObj = Object.assign({}, student, peron)
console.log(myObj);



student["country"] = "Pakistan";

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(student);
console.log(student["courses"]["course2"][1]["HuzairCourse"]);
student.courses.course3()

Object.freeze(peron)
peron.education = "Inter"
console.log(peron.education);