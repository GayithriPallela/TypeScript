class Student {
    name: string;
    rollNo: number;
    static collegeName: string = "ABC College";

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("College:", Student.collegeName);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

// Create objects
let student1 = new Student("Alice", 101);
let student2 = new Student("Bob", 102);

// Display student details
student1.displayDetails();
student2.displayDetails();

// Call static method
Student.displayCollege();