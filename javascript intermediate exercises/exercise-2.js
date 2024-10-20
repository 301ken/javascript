function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('validateButton').addEventListener('click', function() {
    const email = document.getElementById('emailInput').value;
    const isValid = validateEmail(email);
    document.getElementById('result').innerText = isValid ? 'Valid Email Address' : 'Invalid Email Address';
});
