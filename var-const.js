console.log("consant vs variable");
// if we declare the const the we cannot change it.
// const student = 100;
// student = 1000;
// console.log(student);

// if we want to change farther.

let x = 0;
x = x + 100;
console.log(x);

// object.

// const student =  {
//     name : 'gajar nouka',
//     class : 12
// }
// now we cannot change the student because we declare as a constant value.
// if we need reassign then we will go with 'let'.

let student2 = {
    name : 'joy shib',
    age : 10
}
student2 = {
    namee : 'kukil konthi',
    age : 100
}
console.log(student2);
// const diye array declare korle oitar vitorer properties gulake change korte parbo, but direct oita set korte parbo na.

// loop
let sum = 0;
for(let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);