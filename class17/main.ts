// diffrence between arrow function and simple function


let subtract = (num1: number, num2: number) => { return num1 - num2 };

let adding = (num1: number, num2: number) => num1 + num2;


const obj= {
	 errorfunc : () => {
		console.log(this);
		
	}
}

obj.errorfunc()
// errorfunc()
// console.log(subtract(1, 3));
// console.log(adding(4, 6));


//HOISTING
add(1,5)
function add(num1: number, num2: number) {
	console.log(num1 + num2);	 
}

// myFunc() error

let myFunc = function() {
	// console.log("hello");
	
};