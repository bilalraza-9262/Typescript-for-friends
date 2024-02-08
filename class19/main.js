var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myRollNum = 12;
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
var unModified = [1, 2, 4, 6, 8];
var filteredArray = unModified.filter(function (items) { return items > 5; });
console.log(filteredArray);
//reduce method 
var data = [
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
var newData = data.reduce(function (curr, val) {
    return curr + val.price;
}, 0);
console.log(newData);
var prices = [100, 500, 300, 3000];
var numPrices = prices.reduce(function (val, curr) {
    return val + curr;
}, 0);
console.log(numPrices);
var num2 = [1, 2, 4, 5];
var num3 = __spreadArray([], num2, true);
console.log(num3);
num3.pop();
console.log(num2);
console.log(num3);
var person1 = {
    name: "bilal",
    age: 17
};
var person2 = __assign({}, person1);
person2.age = 13;
console.log(person1);
console.log(person2);
var array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
var sumWithInitial = array1.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, initialValue);
console.log(sumWithInitial);
