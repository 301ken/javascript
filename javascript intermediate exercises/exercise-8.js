function getUniqueValues(arr) {
    return [...new Set(arr)];
}

document.getElementById('get').addEventListener('click', () => {
    const input = document.getElementById('array').value;
    const array = input.split(',').map(Number);
    const uniqueValues = getUniqueValues(array);
    document.getElementById('result').innerText = `Unique Values: ${uniqueValues}`;
});
