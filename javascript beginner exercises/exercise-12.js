function GenerateRandomNumber() {
    const min = parseInt(document.getElementById("num1").value);
    const max = parseInt(document.getElementById("num2").value);


    if (min >= max) {
        document.getElementById("result").innerText = "Invalid range. Min must be less than Max.";
        return;
    }


    const result = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("result").innerText = result;
}

document.getElementById('generate').addEventListener('click', GenerateRandomNumber);
