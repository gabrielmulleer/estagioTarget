function fibonacciSequence(limit) {
    let fibonacci = [0, 1];
    
    while (fibonacci[fibonacci.length - 1] < limit) {
        let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextNumber);
    }
    
    return fibonacci;
}

function checkIfInFibonacci(number) {
    let fibonacci = fibonacciSequence(number);
    if (fibonacci.includes(number)) {
        return `${number} pertence à sequência de Fibonacci.`;
    } else {
        return `${number} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso
console.log(checkIfInFibonacci(5)); // Saída: 5 pertence à sequência de Fibonacci.
console.log(checkIfInFibonacci(7)); // Saída: 7 não pertence à sequência de Fibonacci.