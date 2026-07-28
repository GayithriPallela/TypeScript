function factorial(n:number):number {
    let f = 1;
    for(let i=1;i<=n;i++)
        f *= i;
    return f;
}

function isStrong(num:number):boolean {
    let temp = num;
    let sum = 0;

    while(temp > 0) {
        let r = temp % 10;
        sum += factorial(r);
        temp = Math.floor(temp/10);
    }

    return sum == num;
}

let n = 145;

console.log(isStrong(n) ? "Strong Number" : "Not Strong");
