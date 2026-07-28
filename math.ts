// Export arithmetic functions

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        return 0;
    }
    return a / b;
}