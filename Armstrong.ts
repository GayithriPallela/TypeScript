function isArmstrong(num:number):boolean {
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;

    while(temp > 0) {
        let r = temp % 10;
        sum += r ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum == num;
}

let m= 153;

console.log(isArmstrong(n) ? "Armstrong" : "Not Armstrong");
