let arr = [1,2,3,5];

let n = 5;

let total = n*(n+1)/2;

let sum = 0;

for(let x of arr)
    sum += x;

console.log("Missing =", total-sum);
