function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Exemplo de uso
let minhaString = 'Gabriel Müller';
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // Saída: 'rellüM leirbaG'