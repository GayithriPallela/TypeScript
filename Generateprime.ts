function IsPrime(num: number): boolean {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function generatePrimes(start: number, end: number): number[] {
    const primes: number[] = [];

    for (let i = start; i <= end; i++) {
        if (IsPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Declare start and end
const start = 10;
const end = 50;

console.log(`Prime numbers between ${start} and ${end}:`);
console.log(generatePrimes(start, end));
