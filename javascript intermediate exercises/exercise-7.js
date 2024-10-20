function FlattenNestedarrays(arr) {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(FlattenNestedarrays(element));
        } else {
            result.push(element);
        }
    });
    return result;
}

function handleFlattenArray() {
    const input = document.getElementById('nestedArray').value;
    let nestedArray;

    try {
        nestedArray = JSON.parse(input);
        if (!Array.isArray(nestedArray)) throw new Error();
    } catch {
        document.getElementById('result').innerText = "Please enter a valid nested array.";
        return;
    }

    const flattened = FlattenNestedarrays(nestedArray);
    document.getElementById('result').innerText = `Flattened Array: ${JSON.stringify(flattened)}`;
}

document.getElementById('flatten').addEventListener('click', handleFlattenArray);


