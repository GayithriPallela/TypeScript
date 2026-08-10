class Student {
    readonly rollNo: number;
    name: string;
    static collegeName: string = "SVECW";

    constructor(rollNo: number, name: string) {
        this.rollNo = rollNo;
        this.name = name;
    }

    display(): void {
        console.log("College:", Student.collegeName);
        console.log("Roll Number:", this.rollNo);
        console.log("Student Name:", this.name);
    }
}

const s1 = new Student(4549, "Madhurima");
s1.display();