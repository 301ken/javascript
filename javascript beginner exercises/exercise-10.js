function calculate() {
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let operation = document.querySelector('input[name="operation"]:checked').value;

        let result;
        switch(operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
        }

        document.getElementById('result').innerHTML = `Result: ${result}`;
    });
}


calculate();
