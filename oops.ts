//class and object 
class Student {
    name: string = "Gayithri";
    age: number = 20;

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s = new Student();   // Object Creation
s.display();

//Constructor 
class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp = new Employee("Rahul", 50000);
emp.display();

//Access Modifiers 
class demo {
    public name: string = "Gayithri";
    private marks: number = 95;

    display(): void {
        console.log("Name:", this.name);
       // console.log("Marks:", this.marks);
    }
}

let d = new demo();

console.log(d.name); // Accessible
d.display();

// console.log(student.marks); // Error: 'marks' is private