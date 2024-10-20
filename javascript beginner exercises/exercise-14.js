function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

document.getElementById('removeButton').addEventListener('click', () => {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(num => num.trim());
    const uniqueArray = removeDuplicates(array);
    document.getElementById('result').innerText = `Unique values: ${uniqueArray.join(', ')}`;
});
