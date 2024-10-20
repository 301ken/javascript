function CountVowels(){
    const String=document.getElementById('string').value;
    const vowels = 'aeiouAEIOU'
    var count=0;
    for(var i=0;i<String.length;i++){
        if(vowels.includes(String[i])){
            count++;
        }
    }
    document.getElementById('result').innerText=`${count} vowels`;
}


document.getElementById('check').addEventListener('click',CountVowels);
