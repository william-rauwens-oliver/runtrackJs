const loginForm = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const formError = document.getElementById('formError');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;
  clearErrorMessages();
  const emailValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue) {
    displayErrorMessage(usernameError, 'L\'email est requis.');
    isValid = false;
  } else if (emailValue.indexOf('@') === -1 || emailValue.split('@').length !== 2) {
    displayErrorMessage(usernameError, 'Format d\'email invalide. Veuillez inclure "@" et le domaine.');
    isValid = false;
  } else if (emailValue.split('@')[1] === '') {
    displayErrorMessage(usernameError, 'Veuillez saisir le nom de domaine après "@".');
    isValid = false;
  }

  if (!passwordValue) {
    displayErrorMessage(passwordError, 'Le mot de passe est requis.');
    isValid = false;
  } else if (passwordValue.length < 8) {
    displayErrorMessage(passwordError, 'Le mot de passe doit contenir au moins 8 caractères.');
    isValid = false;
  } else if (!/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/\d/.test(passwordValue)) {
    displayErrorMessage(passwordError, 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre.');
    isValid = false;
  }
  if (!emailValue && !passwordValue) {
    displayErrorMessage(formError, 'Veuillez saisir une adresse email et un mot de passe.');
    isValid = false;
  } else if (!emailValue) {
    displayErrorMessage(formError, 'Veuillez saisir une adresse email.');
    isValid = false;
  } else if (!passwordValue) {
    displayErrorMessage(formError, 'Veuillez saisir un mot de passe.');
    isValid = false;
  }

  if (isValid) {
    loginForm.submit();
  }
});

function displayErrorMessage(element, message) {
  element.textContent = message;
}

function clearErrorMessages() {
  usernameError.textContent = '';
  passwordError.textContent = '';
  formError.textContent = '';
}