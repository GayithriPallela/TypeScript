let arr = [10, 5, 20, 8, 15];

let largest = -Infinity;
let second = -Infinity;

for(let n of arr) {
    if(n > largest) {
        second = largest;
        largest = n;
    }
    else if(n > second && n != largest) {
        second = n;
    }
}

console.log(second);
