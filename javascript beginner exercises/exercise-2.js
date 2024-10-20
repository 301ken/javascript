

function reverseString(){
    const str = document.getElementById('string').value;
    var newString='';
    for(var i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    document.getElementById('result').innerText = `${newString}`;
}

document.getElementById('Resultreversed').addEventListener('click', reverseString);
