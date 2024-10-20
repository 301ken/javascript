function findLargestNumber() {
    const input = document.getElementById('numbers').value;
    const numberArray = input.split(',').map(num => parseFloat(num.trim()));

    if (numberArray.length === 0 || numberArray.some(isNaN)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const largestNumber = Math.max(...numberArray);
    document.getElementById('result').innerText = `The largest number is: ${largestNumber}`;
}

document.getElementById('findLargest').addEventListener('click', findLargestNumber);
