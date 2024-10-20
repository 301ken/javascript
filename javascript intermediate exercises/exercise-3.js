const obj = {};

function updateDisplay() {
    document.getElementById('result').innerText = JSON.stringify(obj, null, 2);
}

document.getElementById('addUpdateButton').addEventListener('click', function() {
    const key = document.getElementById('propertyKey').value;
    const value = document.getElementById('propertyValue').value;
    if (key) {
        obj[key] = value;
        updateDisplay();
    }
});

document.getElementById('removeButton').addEventListener('click', function() {
    const key = document.getElementById('removeKey').value;
    if (key in obj) {
        delete obj[key];
        updateDisplay();
    }
});
