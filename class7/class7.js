//STACK (PRIMITIVE)
var _a;
var number1 = 2;
var number2 = number1;
number2 = 5;
console.log(number1);
console.log(number2);
//HEAP (Non Primitive)
var myArrr = [1, 2, 3, 6, 7];
var myArr2 = myArrr;
myArr2[3] = 1;
myArr2.push(8);
console.log(myArrr);
console.log(myArr2);
var student = {
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
            console.log("your name is ".concat(this.student_name));
        }
    }
};
var names = Symbol("key1");
var peron = (_a = {},
    _a[names] = "fawad",
    _a.education = "Matric",
    _a.hobbies = ["Cricket", "Football", "Gaming"],
    _a);
console.log(peron[names]);
console.log(peron["hobbies"][0]);
console.log(peron);
var myObj = Object.assign({}, student, peron);
console.log(myObj);
student["country"] = "Pakistan";
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(student);
console.log(student["courses"]["course2"][1]["HuzairCourse"]);
student.courses.course3();
Object.freeze(peron);
peron.education = "Inter";
console.log(peron.education);
