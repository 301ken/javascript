function CapitalizeWords() {
    const text = document.getElementById('text').value;
    const words = text.split(' ');
    const result=[];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }
    const res = result.join(' ');
    document.getElementById('result').innerText=res;
}

document.getElementById('cl').addEventListener('click', CapitalizeWords);








