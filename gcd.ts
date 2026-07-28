function gcd(a:number, b:number):number {
    while(b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a:number, b:number):number {
    return (a * b) / gcd(a,b);
}

let a = 12, b = 18;

console.log("GCD =", gcd(a,b));
console.log("LCM =", lcm(a,b));
