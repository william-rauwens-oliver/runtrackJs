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
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const validExtensions = ['.fr', '.com', '.io'];
    const validDomains = ['gmail', 'outlook', 'free', 'laplateforme', 'orange', 'sfr', 'icloud'];

    if (!re.test(String(email).toLowerCase())) {
        return false;
    }

    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
        return false;
    }

    const domain = emailParts[1];
    const domainParts = domain.split('.');
    if (domainParts.length !== 2) {
        return false;
    }

    const extension = domainParts[1];
    if (!validExtensions.includes('.' + extension)) {
        return false;
    }

    const domainName = domainParts[0];
    if (!validDomains.includes(domainName)) {
        return false;
    }

    return true;
};

const isValidPassword = password => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/;
    return re.test(password);
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const addressValue = address.value.trim();
    const zipcodeValue = zipcode.value.trim();

    const lettersOnlyRegex = /^[A-Za-z]+$/;

    if(usernameValue === '') {
        setError(username, 'Nom requis');
    } else if (!lettersOnlyRegex.test(usernameValue)) {
        setError(username, 'Le nom ne doit contenir que des lettres');
    } else if (usernameValue.length < 3) {
        setError(username, 'Le nom doit contenir au moins 3 lettres');
    } else {
        setSuccess(username);
    }

    if(firstnameValue === '') {
        setError(firstname, 'Prénom requis');
    } else if (!lettersOnlyRegex.test(firstnameValue)) {
        setError(firstname, 'Le prénom ne doit contenir que des lettres');
    } else if (firstnameValue.length < 3) {
        setError(firstname, 'Le prénom doit contenir au moins 3 lettres');
    } else {
        setSuccess(firstname);
    }

    if(emailValue === '') {
        setError(email, 'Email requis');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Fournir une adresse email valide avec un "@" et une extension .fr, .com ou .io et un domaine valide (gmail, outlook, free, laplateforme, orange, sfr, icloud)');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Mot de passe requis');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un caractère spécial et un chiffre');
    } else {
        setSuccess(password);
    }

    if(addressValue === '') {
        setError(address, 'Adresse requise');
    } else {
        const addressRegex = /^(\d+)\s+(.+)/;
        const match = addressValue.match(addressRegex);
        if (match) {
            setSuccess(address);
        } else {
            setError(address, 'Adresse invalide. Veuillez inclure le numéro de rue et le nom de la rue.');
        }
    }

    if(zipcodeValue === '') {
        setError(zipcode, 'Code postal requis');
    } else if (!/^\d{5}$/.test(zipcodeValue)) {
        setError(zipcode, 'Le code postal doit contenir exactement 5 chiffres');
    } else {
        setSuccess(zipcode);
    }
};