function sumTwoNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    document.getElementById('result').innerText = `The sum of ${num1} and ${num2} is: ${sum}`;
}

document.getElementById('calculateBtn').addEventListener('click', sumTwoNumbers);

