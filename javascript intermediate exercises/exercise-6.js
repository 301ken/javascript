function checkAnagarms() {
    const str1=document.getElementById('num1').value;
    const str2=document.getElementById('num2').value;
    const formatString = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');
     if(formatString(str1)===formatString(str2)){
         document.getElementById('result').innerText=true;
     }else{
         document.getElementById('result').innerText=false;
     }
}

document.getElementById('check').addEventListener('click', checkAnagarms);
