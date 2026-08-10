class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    displayEmployee(): void {
        console.log("Employee:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

const emp = new Employee("Rahul", 60000, "IT");
emp.displayEmployee();
console.log(emp.name);