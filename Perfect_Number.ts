function isPerfect(num:number):boolean {
    let sum = 0;

    for(let i=1; i<num; i++) {
        if(num % i == 0)
            sum += i;
    }

    return sum == num;
}

let x = 28;

console.log(isPerfect(n) ? "Perfect Number" : "Not Perfect");
