const form = document.getElementById('form');
const passowrd1El = document.getElementById('password1');
const passowrd2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');



let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please fill out all fields!'
        message.style.color = 'rgb(169, 19, 19)';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (passowrd1El.value === passowrd2El.value) {
        passwordsMatch = true;
        passowrd1El.style.borderColor = 'green';
        passowrd2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match!';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passowrd1El.style.borderColor = 'red';
        passowrd2El.style.borderColor = 'red';
        return;
    }
    if (isValid && passwordsMatch) {
        message.textContent = 'Registration successful';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

function darkMode() {
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

function lightMode() {
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

form.addEventListener('submit', processFormData);
