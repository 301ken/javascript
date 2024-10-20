function numberToString() {
    const num = parseFloat(document.getElementById("numberInput").value);
    const result = String(num); // Convert number to string
    document.getElementById("result").innerText = `String representation: ${result}`;
}
/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberToString(num) {
    return String(num);
}

rl.question('Enter a number: ', (input) => {
    const num = parseFloat(input);
    if (!isNaN(num)) {
        const result = numberToString(num);
        console.log(`String representation: ${result}`);
    } else {
        console.log('Invalid input. Please enter a valid number.');
    }
    rl.close();
});
*/


