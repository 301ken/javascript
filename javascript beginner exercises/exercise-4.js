

function CelsiustoFar() {
    const number = parseFloat(document.getElementById('number').value);
    const res = ((number*1.8))+32;
    document.getElementById('result').innerText=res;
}
document.getElementById('Calculate').addEventListener('click', CelsiustoFar);
