function IsPrime(num){
    if (num<=1) return false;
    if(num<=3) return true;
    for (let i=2;i<num;i++){
        if (num%i===0) return false;
    }
    return true;

}


function findPrimeNumbers(){
    const limit = document.getElementById('limit').value;
    const primes = [];
    for (let i = 0; i <= limit; i++) {
        if (IsPrime(i)){
            primes.push(i);
        }
    }
    const result1 = primes.join(',');
    document.getElementById('result').innerText=result1;
}

document.getElementById('count').addEventListener('click', findPrimeNumbers);

