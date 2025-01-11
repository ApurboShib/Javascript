// for of -> used for array looping.
// for in -> used for object looping.

const frnd = ["allu", "kallu", "ballu", "challu", "mallu"];

for(const x of frnd) {
   // console.log(x);
}

for(let i = 0; i < frnd.length; i++) {
    console.log("index are : ")
    console.log(i);
    console.log("values are : ");
    console.log(frnd[i]);
}

// let reverse the array

frnd.reverse();
console.log(frnd);