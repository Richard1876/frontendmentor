const characterLength = document.getElementById('character-length');
const numberInput = document.getElementById('number-input');
const imgBtn = document.getElementById('img-btn');
const passwordBox = document.getElementById('password');
const generator_btn = document.getElementById('generator-btn');
const form = document.getElementById('form');
const barContainer1 = document.getElementById('bar-container-1');
const barContainer2 = document.getElementById('bar-container-2');
const barContainer3 = document.getElementById('bar-container-3');
const barContainer4 = document.getElementById('bar-container-4');
const barContainer5 = document.getElementById('bar-container-5');
const customCheckbox = document.getElementById('custom-checkbox');
const customCheckbox2 = document.getElementById('custom-checkbox2');
const customCheckbox3 = document.getElementById('custom-checkbox3');
const customCheckbox4 = document.getElementById('custom-checkbox4');
const includeUpperCaseLetters = document.getElementById('include-uppercase-letter');
const includeLowerCaseLetters = document.getElementById('include-lowercase-letter');
const includeNumbers = document.getElementById('include-number');
const includeSymbols = document.getElementById('include-symbols');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+<>?-=";
const allChars = uppercase + lowercase + number + symbol;

let Char_length = 0;

// Update progress bar based on the character length
characterLength.addEventListener('input', (e) => {
    Char_length = e.target.value;
    numberInput.innerText = Char_length;

    // Show/hide progress bars based on password length
    if (Char_length <= 0) {
        barContainer5.style.display = 'flex';
        barContainer1.style.display = 'none';
        barContainer2.style.display = 'none';
        barContainer3.style.display = 'none';
        barContainer4.style.display = 'none';
        passwordBox.classList.add ('changePlaceholderColor')
    } else if (Char_length >= 1 && Char_length <= 5) {
        passwordBox.classList.remove ('changePlaceholderColor')
        barContainer1.style.display = 'flex';
        barContainer2.style.display = 'none';
        barContainer3.style.display = 'none';
        barContainer4.style.display = 'none';
        barContainer5.style.display = 'none';
    } else if (Char_length > 5 && Char_length <= 10) {
        barContainer1.style.display = 'none';
        barContainer2.style.display = 'flex';
        barContainer3.style.display = 'none';
        barContainer4.style.display = 'none';
        barContainer5.style.display = 'none';
    } else if (Char_length > 10 && Char_length <= 15) {
        barContainer1.style.display = 'none';
        barContainer2.style.display = 'none';
        barContainer3.style.display = 'flex';
        barContainer4.style.display = 'none';
        barContainer5.style.display = 'none';
    } else if (Char_length > 15) {
        barContainer1.style.display = 'none';
        barContainer2.style.display = 'none';
        barContainer3.style.display = 'none';
        barContainer4.style.display = 'flex';
        barContainer5.style.display = 'none';
    }
});

// Handle password generation
generator_btn.addEventListener('click', () => {
    let password = "";
    
    // Conditionally add characters based on the checkbox selections
    if (includeUpperCaseLetters.checked) {
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    if (includeLowerCaseLetters.checked) {
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    if (includeNumbers.checked) {
        password += number[Math.floor(Math.random() * number.length)];
    }
    if (includeSymbols.checked) {
        password += symbol[Math.floor(Math.random() * symbol.length)];
    }

    // Fill the rest of the password with random characters from all character sets
    while (password.length < Char_length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
});

// Copy password to clipboard
imgBtn.addEventListener('click', () => {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
});

// Toggle custom checkboxes visibility
includeUpperCaseLetters.addEventListener('click', () => {
    customCheckbox.style.display = customCheckbox.style.display === 'flex' ? 'none' : 'flex';
});

includeLowerCaseLetters.addEventListener('click', () => {
    customCheckbox2.style.display = customCheckbox2.style.display === 'flex' ? 'none' : 'flex';
});

includeNumbers.addEventListener('click', () => {
    customCheckbox3.style.display = customCheckbox3.style.display === 'flex' ? 'none' : 'flex';
});

includeSymbols.addEventListener('click', () => {
    customCheckbox4.style.display = customCheckbox4.style.display === 'flex' ? 'none' : 'flex';
});
