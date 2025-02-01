// access the data..
const data = [
    {name : 'abul', age: 22, address : 'kashimpur', profession : 'dakat'}
]

console.log(data);
// it not a object, object into the array, we has to access according.
console.log(data[0].address);

const product = {
    count : 5000,
    data : [
        {id : 1010, name: 'lenevo', model : '20201B', price : 10000},
        {id : 1011, name : "mackbook", model : 'M1 chip', price : 10000000}
    ]
}


console.log(product);
// first product.
console.log(product.data[0].price);
// second product.
console.log(product.data[1].price);

// create another example.

const user = {
    id : 111,
    name : 'Abul mia',
    address :
    {village : 'majortila', city : 'Uposhohor', district : 'Sylhet', division : 'Sylhet', country : 'bangladesh' },
    gender : 'male'
}
console.log(user);
console.log(user.id);
console.log(user.address);
console.log(user.address.country);
console.log(user.gender);

const user2 = {
    id : 111,
    name : 'Pori Didir Majhar',
    address: {
        city : 'Cumilla',
        country : 'Bnagladesh',
        phone : 1765159810
    }
}
console.log(user2);
console.log(user2.id);
console.log(user2.address.phone);
console.log(user2.address?.village);
console.log(user.address.village);