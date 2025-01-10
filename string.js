const name = "joy";
const position = "super"
const ans = new String("power"); // this is an object

console.log(typeof(name));
console.log(typeof(position));
console.log(typeof(ans));

// normal length() use kore amra string er character cnt  ber korte parbo

const test = "hdsjfgshfghsdfgmhsgfhgf";
console.log(test.length);

const check = "hshfsgdfyusdgnsdbvfwgfsb";
const res = check.slice(2, 10);
console.log(res);

// const word = "ami ekta santo sristo leg bisisto chele";
const word = ['ajke', 'amar', 'Mon', 'valo', 'nai'];
// console.log(word);
// console.log(word.split(''));
// console.log(word.split(' '));
console.log(word.join());
console.log(word.join('.'));
console.log(word.join('|'));

// string concat

const a = "Joy"
const b = "Shib";
const c = a + " " + b;
console.log(c);
const fullName = a.concat(b);
console.log(fullName);
const fullName2 = a.concat(' ').concat(b);
console.log(fullName2);

// reverse the string.

const sample = "i am the ultimate legend";

let rev = ' ';
for(const d of sample) {
rev = d + rev;

}
console.log(rev);