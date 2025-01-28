const different = (x, y) => (x - y);
const multiply = (a, b, c) => (a * b * c);

// single parameter or one perameter.
const getAge = (person) => person.age;
const student = {name : 'ananta', age : 45}
const age = getAge(student)
console.log(age);

// array..

const getThird = numbers => numbers[2];
const third = getThird([2,4,2,4,22,4,2,34,2]);
console.log(third);

// no perameter.

const getPi = () => Math.PI;
console.log(getPi());

// large arrow functions : if you return to get anything returned from this functions. then you have yo use the return keywords

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}

const res = doMath(10, 3, 22);
console.log(res);