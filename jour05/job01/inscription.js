const form = document.getElementById('form');
const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const addressValue = address.value.trim();
    const zipcodeValue = zipcode.value.trim();

    if(usernameValue === '') {
        setError(username, 'Nom est requis');
    } else {
        setSuccess(username);
    }

    if(firstnameValue === '') {
        setError(firstname, 'Prénom est requis');
    } else {
        setSuccess(firstname);
    }

    if(emailValue === '') {
        setError(email, 'Email est requis');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Fournir une adresse email valide');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Mot de passe est requis');
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordValue)) {
        setError(password, 'Le mot de passe doit contenir au moins 8 caractères avec au moins une lettre majuscule, une lettre minuscule et un chiffre.');
    } else {
        setSuccess(password);
    }

    if(addressValue === '') {
        setError(address, 'Adresse est requise');
    } else {
        setSuccess(address);
    }

    if(zipcodeValue === '') {
        setError(zipcode, 'Code postal est requis');
    } else if (!/^\d{5}$/.test(zipcodeValue)) {
        setError(zipcode, 'Le code postal doit contenir exactement 5 chiffres');
    } else {
        setSuccess(zipcode);
    }
};