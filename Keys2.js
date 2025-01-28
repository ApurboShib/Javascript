const glass = {
    name : 'glass',
    color : 'red',
    price : 12,
    isCleaned : 'true'
}
console.log(glass);
// shows the all keys of the objects.
const keys = Object.keys(glass);
// shows the all values of the objects.
const value = Object.values(glass);
console.log(keys);
console.log(value);
// we also print as a pair.

const pair = Object.entries(glass);
console.log("pairs are : ");
console.log(pair);
// we can also delete a property.
delete glass.isCleaned;
console.log(glass);
// we can also freeze the property.
Object.freeze(glass);
glass.price = 100; // kno change ashbe na.
console.log(glass);