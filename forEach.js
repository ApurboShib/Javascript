// it's not returning the value.

const numbers = [1,2,3,4,5,6,7,8,9];
const result = numbers.forEach(n => console.log(n));
console.log(result);

// fiter..
// filter selects elements based on a conditions and
// return an array with the elements the fulfilled the conditions.

const heights  = [12,33,44,53,55,24,99];
const select = heights.filter(num => num < 50);
console.log(select);
const oddHeight = heights.filter(num => num % 2);
console.log(oddHeight);
const friends = ['kaka', 'dhaka', 'chaca', 'jetha'];
const chutiFriends = friends.filter(chuto => chuto.length < 5);
console.log(chutiFriends);
// similar to find() functions.

const hello = [39,4,2,566,4,3,5,3,5,5];
const check = hello.find(n => n > 3);
console.log(check);


