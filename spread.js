const mx = Math.max(2,4,5,2,44,2,4,2,4,4,5555)
console.log(mx)
// if we want to find the max of array.

const numbers = [2,44,2,4,44,231,442,4,233,24242,42332,2,3]
const mxArray = Math.max(numbers)
console.log(mxArray) // it gives NAN.

// for the correct answer.
const mxArray2 = Math.max(...numbers)
console.log(...numbers)
console.log(mxArray2)



const nums = [32,4,2,44,22,42,434];
const num2 = nums;
num2.push(1000);
console.log(num2);
console.log(nums);

// use spread operator(...) to copy

const friend = [12,23,34,4,55];
const bondhu = friend;
const dosto = [...friend];
console.log(dosto);
friend.push(1000);
console.log(dosto);
console.log(friend);

// advanced.

const sonkha = [...friend, 10101];
console.log(sonkha);
