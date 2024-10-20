function Intersection() {
    const arr1 = document.getElementById('arr1').value.split(',').map(Number);
    const arr2 = document.getElementById('arr2').value.split(',').map(Number);
    let result = [];
    const set = new Set(arr2);

    for (let i = 0; i < arr1.length; i++) {
        if(set.has(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    document.getElementById('result').innerText = `Intersection: ${result.join(', ')}`;
}

document.getElementById('check').addEventListener('click', Intersection);
