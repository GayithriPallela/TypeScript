//Functions in Typescript 
//Retutn types 
//Rerutn type: Number
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20));

function square(num: number): number {
    return num * num;
}
console.log(square(5));

//Return Type :String 
function greet(name: string): string {
    return "Hello " + name;
}
console.log(greet("Gayithri"));

//Optional Parameters 
function student(name: string, age?: number) {
    console.log("Name:", name);
    if (age !== undefined) {
        console.log("Age:", age);
    }
}
student("Gayithri", 20);
student("Siri");

function product(name: string, price?: number) {
    console.log("Product:", name);

    if (price !== undefined) {
        console.log("Price:", price);
    }
}
product("Laptop", 50000);
product("Mouse");

//Default Parameteers

function welcome(name: string = "Guest") {
    console.log("Welcome " + name);
}
welcome("Gayithri");
welcome();

function area(length: number, width: number = 5) {
    console.log("Area:", length * width);
}
area(10, 8);
area(10);

//Rest Parameters 
function sum(...numbers: number[]) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    console.log("Sum:", total);
}
sum(10, 20);
sum(10, 20, 30, 40);

function students(...names: string[]) {
    for (let name of names) {
        console.log(name);
    }
}

students("Gayithri", "Siri", "Ram");