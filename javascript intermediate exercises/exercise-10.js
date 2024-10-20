function Fibonacci(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

document.getElementById('calculate').addEventListener('click', () => {
    const n = parseInt(document.getElementById('number').value);
    if (n < 1) {
        document.getElementById('result').innerText = "Please enter a positive integer.";
    } else {
        const result = Fibonacci(n);
        document.getElementById('result').innerText = `Fibonacci number at position ${n} is: ${result}`;
    }
});
