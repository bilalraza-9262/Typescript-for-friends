type Bilal = [string, number?]


interface User {

    name: string,
    hobbies: string[],
    course: {
        course01: string,
        course02: string
    },
    coursePrice: number[]
}


const data: User = {

    name: "Saim",
    hobbies: ["Cricket","Football"],
    course: {
        course01: "Web",
        course02: "Data Structure"
    },
    coursePrice:[1200,2000]

};

let name1: Bilal = ["bils"]

function user(a: number, b = 3) {

    if (b) {
        return a + b
    } else {
        return a
    }

}
user(2)
// let userINput:Function = function(a:number,b:number):number{
//     return a+b
// }
// userINput()