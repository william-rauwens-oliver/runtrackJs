const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const errorDisplay = element.nextElementSibling;
    errorDisplay.innerText = message;
    errorDisplay.classList.remove('hidden');
    element.classList.add('border-red-500');
};

const setSuccess = element => {
    const errorDisplay = element.nextElementSibling;
    errorDisplay.innerText = '';
    errorDisplay.classList.add('hidden');
    element.classList.remove('border-red-500');
};

const isValidEmail = email => {
    const laplateformeRe = /@laplateforme\.io$/;
    return laplateformeRe.test(email.trim());
};

const validateInputs = () => {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if(emailValue === '') {
        setError(emailInput, 'Le mail est requis');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Seules les adresses email de domaine "@laplateforme.io" sont autorisées');
    } else {
        setSuccess(emailInput);
    }

    if(passwordValue === '') {
        setError(passwordInput, 'Le mot de passe est requis');
    } else {
        setSuccess(passwordInput);
    }

    if (emailValue !== '' && passwordValue !== '') {
        simulateLogin(emailValue, passwordValue);
    }
};

function simulateLogin(email, password) {
    console.log('Tentative de connexion avec : Email =', email, ', Mot de passe =', password);
}