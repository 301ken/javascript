function checkPolindrome(){
    var string = document.getElementById('string').value;
    var newstring ='';
    for(var i=string.length-1;i>=0;i--){
        newstring+=string[i];
    }
    if(newstring.toLowerCase()===string.toLowerCase()){
        document.getElementById('result').innerText=`${string} is polindrome`;
    }else{
        document.getElementById('result').innerText=`${string} is not polindrome`;
    }
}
var string = document.getElementById('string').value;
document.getElementById('check').addEventListener('click', checkPolindrome);