const numbers = [2,3,4,5,6];

// const doubled = [];
// for(const num of numbers) {
//     const square = num * num;
//     doubled.push(square);
// }
// console.log(doubled);
function doubleIt(num) {
    return num *2 ;
}

const result = numbers.map(doubleIt);
console.log(result);
 const square = numbers.map(num => num * num);
 console.log(square);

 // more array,

 console.log("more array....");

 const exp = [12,14,16,18,20];
 const doubled = exp.map(exp => exp * 2);
 console.log(doubled);
 const fiveAdd = exp.map(exp => exp + 5);
 console.log(fiveAdd);
 const half = exp.map(exp => exp/2);
 console.log(half);
 const friends = ['rahim', 'karim', 'majnu', 'keshab', 'rishab', 'jamil', 'kamil'];
 const lenthes = friends.map(frnd => frnd.length);
 console.log(lenthes);
 const firstChar = friends.map(frnd => frnd[0]);
 console.log(firstChar); 