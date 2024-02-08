
function add(num1: number, num2: number): number {
	return num1 + num2
}

let myNum: number = add(1, 4)
console.log(myNum);

console.log(add(3, 6));

// anonymus
let myFunc = function () {

}

//arrow functions

//return
let student = (name: string, age: number) => {
	return ` Your name is ${name}  and your age }`
}
let func = student("Arafat", 22)


//non-return
let userDetails = (name: string) => console.log(` Your name is ${name}`);

let mydetails = userDetails("Bilal")
console.log(mydetails);


// JS ONELINE ARROW FUNCTION
// let userDetails = name => console.log(` Your name is ${name}  and your age }`)


// global and local scope

let num1: number = 2;

function named() {
	let num2: number = 4;
	console.log(num2);
	// console.log(num3);

	function innerFunc() {
		let num3: number = 6;
		console.log(num2);

	}

}
// error
// console.log(num2);

if (true) {
	let myName: string = "bilal"
	console.log(num1);

}
// console.log(myName);


while (false) {
	console.log(2);

}

do {
	console.log(4);

} while (true)