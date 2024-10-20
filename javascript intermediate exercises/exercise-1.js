function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

document.getElementById('sortButton').addEventListener('click', function() {
    const input = document.getElementById('arrayInput').value;
    const arr = input.split(',').map(Number);
    const sortedArray = BubbleSort(arr);
    document.getElementById('result').innerText = `Sorted Array: ${sortedArray}`;
});
