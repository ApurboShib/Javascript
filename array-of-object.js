const laptops = [
    {id : 1, name: 'Lenevo', price : 65000},
    {id : 2, name: 'Samsung', price : 80000},
    {id : 3, name: 'Dell', price : 55000},
    {id : 4, name: 'ASUS', price : 85000},
    {id : 1, name: 'Macbook', price : 165000}
    
]
// map.
const name = laptops.map(name => name.name);
console.log(name);
const price = laptops.map(p => p.price);
console.log(price);
// forEach.

laptops.forEach(p => console.log(p.id));

// filter
const expensiveLaptop = laptops.filter(filt => filt.price > 80000);
console.log(expensiveLaptop);

// find.

const affordable = laptops.find(x => x.price <= 55000);
console.log(affordable);

// reduce.
const totalLapPrice = laptops.reduce((first, last) => first + last.price,0)
console.log(totalLapPrice);
