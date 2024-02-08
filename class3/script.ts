// here import all fuctions and variables
import inquirer from "inquirer";
import chalk from "chalk"

let userArray: string[] = ["+", "-", "/", "*"]

let userInput = await inquirer.prompt([{
    name: "num1",
    type: "number",
    message:chalk.hex("#c4ba5c")("Please enter first number")
},
{
    name: "num2",
    type: "number",
    message: "Please enter second number"
},
{
    name: "userChoices",
    type: "list",
    message: "Select Operations",
    choices: ["+", "-", "/", "*"]
}])

if (typeof userInput.num1 === "number" && typeof userInput.num2 === "number") {

    if (userInput.userChoices === userArray[0]) {
        console.log(`your output is ${userInput.num1 + userInput.num2}`);


    } else if (userInput.userChoices === userArray[1]) {

        console.log(`your output is ${userInput.num1 - userInput.num2}`);

    } else if (userInput.userChoices === userArray[2]) {

        console.log(`your output is ${userInput.num1 / userInput.num2}`);
    } else if (userInput.userChoices === userArray[3]) {

        console.log(`your output is ${userInput.num1 * userInput.num2}`);
    }

} else {
    console.log("please enter a correct number");

}


// console.log(number);

// let userInput =await  inquirer
// let message:string ="would you like to learn some Python today?";
// let person_name:string ="Eric";
// // console.log("Hello "+ person_name+ "," +message);
// console.log(`Hello ${person_name}, ${message}`);

// function adding(num1: number,) {
//     // console.log();
//     if (num1 === 3) {
//         return num1

//     } else {
//         return "incorrect number"
//     }
// }

// console.log();



// adding(2, 3)

