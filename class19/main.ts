let myRollNum = 12;

switch (myRollNum) {

	case 10:
		console.log("bilal");
	case 12:
		console.log("arafat");
		break;
	default:
		console.log("jami");


}
while (true) {
	console.log("Loop started");
	break;
	console.log("Loop end");

}
//array ka forEach method value ko return nhi krta
//array ka map method value ko return  krta he
//array ka filter method hmaesha true value ko return  krta he

let unModified: number[] = [1, 2, 4, 6, 8];

let filteredArray = unModified.filter((items) => items > 5);
console.log(filteredArray);

//reduce method 
const data = [
	{
		book: "Java", price: 1200
	},
	{
		book: "Python", price: 1000
	},
	{
		book: "JS", price: 500
	},
	{
		book: "C#", price: 3000
	}
];
let newData = data.reduce((curr, val) => {
	return curr + val.price
}, 0)
console.log(newData);


let prices = [100, 500, 300, 3000]

let numPrices = prices.reduce((val, curr) => {
	return val + curr
}, 0)
console.log(numPrices);

let num2 = [1, 2, 4, 5];
let num3 = [...num2];
console.log(num3);
num3.pop();
console.log(num2);
console.log(num3);

let person1 = {
	name: "bilal",
	age: 17
};
let person2 = { ...person1 }
person2.age = 13;
console.log(person1);
console.log(person2);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,
	initialValue,
);

console.log(sumWithInitial);