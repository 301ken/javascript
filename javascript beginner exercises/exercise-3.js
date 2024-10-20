function OddorEven(){
    const num1 = parseInt(document.getElementById("num").value);
    if(num1%2===0){
        document.getElementById("result").innerText = "Number is even";
    }
    else{
        document.getElementById("result").innerText = "Number is odd";
    }
}
document.getElementById("defineOddorEven").addEventListener('click', OddorEven);

