function CalculteFactorial(){
    var factorial = document.getElementById("number").value;
    for(var i=factorial-1;i>=1;i--){
        factorial=factorial*i;
    }
    document.getElementById('result').innerText = factorial;
}

document.getElementById('calculate').addEventListener('click', CalculteFactorial);





