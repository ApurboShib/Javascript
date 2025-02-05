const num = [33,23,434,53,545,2,4,22,434];
const total = num.reduce((previous , current) => previous + current,0);
console.log(total);
const sum = num.reduce((a,b) => a + b + 1000, 0);
console.log('the extended sum is : ', sum);