function countWordOccurrences() {
    const text = document.getElementById('inputText').value.toLowerCase();
    const wordsArray = text.match(/\b\w+\b/g);
    const wordCount = {};

    wordsArray.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const resultText = Object.entries(wordCount).map(([word, count]) => `${word}: ${count}`).join(', ');
    document.getElementById('result').innerText = resultText;
}

document.getElementById('countWords').addEventListener('click', countWordOccurrences);
