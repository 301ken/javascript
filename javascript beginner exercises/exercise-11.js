function SumOfArrayElemenets(){
    const input =document.getElementById('numbers').value;
    const array = input.split(',').map(num => parseFloat(num.trim()));

    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    document.getElementById('result').innerText = `Result is :${sum}`;
}
document.getElementById('SuminArr').addEventListener('click', SumOfArrayElemenets);

