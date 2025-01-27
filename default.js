function add (num1, num2) {
    let result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

console.log("the sum value is : ", add(100, 200));

function name(first, second) {
    const full = first + ' ' + second;
    return full;
}
console.log("my name is : ", name('joy', 'shib'));
