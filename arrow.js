function add (a, b) {
   return a + b
}


// function expression.

const add2 = function (a, b) {
    return a + b;
}

// arrow functions.

const add3 = (a, b) => a + b;
const add4 = (a, b, c, d, e) => a + b + c + d + e;
const ans = add(100, 200);
console.log(ans);
const answer = add4(100, 200, 300, 400, 500);
console.log(answer)
