const actor = {
    name : 'munshi mia',
    age : 20,
    phone : '017656565652',
    money : 10101010101010
}
// console.log(actor.money);
// console.log(actor.phone);
// if right side is an object left side of desturcturing will be object as well.
// use property name as the variable that contains the property value.
const {phone} = actor

console.log(phone)

const {age} = actor
console.log(age);

// array desturcturing .
const number = [10,20];
const {x, y} = number
console.log(x, y);
// function.

function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [first, second] = doubleThem(2,2);
console.log(first, second);



