let arr = [1,2,2,3,3,3];

let count:any = {};

for(let x of arr) {
    count[x] = (count[x] || 0) + 1;
}

console.log(count);
