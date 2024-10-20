function fizzBuzz() {
    let output = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz\n";
        } else if (i % 3 === 0) {
            output += "Fizz\n";
        } else if (i % 5 === 0) {
            output += "Buzz\n";
        } else {
            output += i + "\n";
        }
    }
    document.getElementById('result').innerText = output;
}

document.getElementById('runFizzBuzz').addEventListener('click', fizzBuzz);
