class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayEmployee(): void {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        // Protected member is accessible in derived class
        console.log("Department:", this.department);
    }
}

// Create objects
let emp = new Employee("Alice", 50000, "HR");

// Public member can be accessed directly
console.log("Employee Name:", emp.name);

// Private and protected members cannot be accessed directly
// console.log(emp.salary);      // Error: 'salary' is private
// console.log(emp.department);  // Error: 'department' is protected

emp.displayEmployee();

let mgr = new Manager("Bob", 70000, "IT");
mgr.showDepartment();