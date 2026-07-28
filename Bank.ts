class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }

    displayBalance(): void {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Current Balance: ${this.balance}`);
    }
}

// Create an object
let account = new BankAccount("John", 5000);

// Deposit money
account.deposit(2000);

// Withdraw money
account.withdraw(1500);

// Display balance
account.displayBalance();