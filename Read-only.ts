class Student {
    readonly studentId: number;
    name: string;
    course: string;

    constructor(studentId: number, name: string, course: string) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}

// Create an object
let student = new Student(101, "Alice", "Computer Science");

// Display details
student.displayDetails();

// The following statement will cause an error because studentId is readonly
// student.studentId = 102;