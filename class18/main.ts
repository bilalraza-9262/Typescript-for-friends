let myArr: string[] = ["bilal", "rafay", "hamza"];


//non-return
myArr.forEach(function (value) {

	if (value === "bilal") {
		console.log("valid user");
	} else {
		console.log("Invalid user");

	}
	// return value
})


// map method
let newArr: Array<string | number> = myArr.map((value) => {
	return value === "rafay" ? value : 1;

})
console.log(newArr);
// newArr=""

//Filter method

let unModified: number[] = [1, 2, 4, 6, 8];

// let filteredArr = unModified.filter((value) => {
// 	return value === 2
// })
// console.log(filteredArr);

const data = [
	{
		book: "Java", History: 2009
	},
	{
		book: "Python", History: 2010
	},
	{
		book: "JS", History: 2020
	}, {
		book: "C#", History: 2022
	}
]

let myBook = data.filter(value => value.History > 2010).filter(value => value.book == "C#").map(value => value.History = 2010)

console.log(myBook);


let friendbook = data.filter(item => item.History > 2010).filter(value => value.book == "C#").forEach(value => {
	return value.History = 2010
})
console.log(friendbook);
