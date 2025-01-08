// array diclerations..

// intteger array
const hello = [1,2,3,4,5,6,8,10];
// string array

const h = ["abul", "babul", "kabul", "habul", "bulbul"];

// mixed array delc

const k = [2,3,5,'2', '3', 'r', "hello"];

// length of the arry is.

console.log(hello.length);

// printing the array

console.log(hello);

//print the array indext value.

console.log("the lenthth of array is :" , hello[4]);

// set or update the value

let abc = 38743;
abc = 10;
console.log(abc);

// insert value on array

h.push("joy");
console.log(h);
h.pop();
console.log(h);

// first value remove korrar jonno shift() use korbo
console.log(hello);
hello.shift();
console.log(hello);
hello.unshift(100);
console.log(hello);

// check that is present is not??

console.log(hello.includes(4));
console.log(h.includes("babul"));

// check je value ta koto num index eh ache

console.log(h.indexOf("babul"));
console.log(hello.indexOf(10));

// isArray diye check korte parbo je eita array kina

console.log(Array.isArray(h));

