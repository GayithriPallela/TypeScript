//Arrow Functions 
const add = (a: number, b: number): number => {
    return a + b;
};
console.log("Sum =", add(10, 20));

const checkEven = (num: number): string => {
    return num % 2 === 0 ? "Even" : "Odd";
};
console.log(checkEven(15));
console.log(checkEven(20));

//let const Template literals 
let studentName: string = "Gayithri";
let age: number = 20;
const college: string = "Vishnu Engineering College";

console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`College: ${college}`);

let product: string = "Laptop";
let price: number = 55000;
const brand: string = "Dell";

console.log(`Product: ${product}`);
console.log(`Brand: ${brand}`);
console.log(`Price: ₹${price}`);