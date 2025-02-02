const numbers = [2,3,4,5,6];

// const doubled = [];
// for(const num of numbers) {
//     const square = num * num;
//     doubled.push(square);
// }
// console.log(doubled);
function doubleIt(num) {
    return num *2;
}

const result = numbers.map(doubleIt);
console.log(result);
 const square = numbers.map(num => num * num);
 console.log(square);