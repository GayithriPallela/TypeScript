class Student {
    name: string;
    rollNo: number;
    course: string;

    constructor(name: string, rollNo: number, course: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student Details");
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Course:", this.course);
    }
}

// Create an object
let student1 = new Student("Alice", 101, "Computer Science");

// Display details
student1.displayDetails();