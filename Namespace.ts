//Namespace 
namespace StudentDetails {

    export class Student {
        name: string = "Gayithri";
        age: number = 20;

        display(): void {
            console.log("Name:", this.name);
            console.log("Age:", this.age);
        }
    }
}

let s = new StudentDetails.Student();
s.display();

//generic variable 
let value: string | number;

value = "Gayithri";
console.log(value);

value = 100;
console.log(value);

//generic fucntion
function display<T>(value: T): T {
    return value;
}

console.log(display<string>("Hello"));
console.log(display<number>(100));

//generic constraints 
interface Person {
    name: string;
}

function printName<T extends Person>(obj: T): void {
    console.log("Name:", obj.name);
}

printName({ name: "Gayithri" });


