function isSubstring(str, substr) {
    return str.includes(substr);
}

document.getElementById('substringButton').addEventListener('click', () => {
    const mainString = document.getElementById('mainString').value;
    const substring = document.getElementById('substring').value;
    const presence = isSubstring(mainString, substring);
    document.getElementById('substringResult').innerText = `Substring Present: ${presence}`;
});
