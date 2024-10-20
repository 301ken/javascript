function CurrentTime() {
    var today = new Date();
    const time = today.toLocaleString();
    document.getElementById('result').innerText = time;
}

document.getElementById('Check').addEventListener('click', CurrentTime);
