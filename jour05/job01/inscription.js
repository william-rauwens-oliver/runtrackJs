const inscriptionForm = document.getElementById('inscriptionForm');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const adresse = document.getElementById('adresse');
const codePostal = document.getElementById('code_postal');
const nomError = document.getElementById('nomError');
const prenomError = document.getElementById('prenomError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const adresseError = document.getElementById('adresseError');
const codePostalError = document.getElementById('codePostalError');
const formError = document.getElementById('formError');

inscriptionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;
  clearErrorMessages();

  isValid = validateNom() && isValid;
  isValid = validatePrenom() && isValid;
  isValid = validateEmail() && isValid;
  isValid = validatePassword() && isValid;
  isValid = validateAdresse() && isValid;
  isValid = validateCodePostal() && isValid;

  if (isValid) {
    inscriptionForm.submit();
  }
});

function displayErrorMessage(element, message) {
  element.textContent = message;
}

function clearErrorMessages() {
  nomError.textContent = '';
  prenomError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  adresseError.textContent = '';
  codePostalError.textContent = '';
  formError.textContent = '';
}

function validateNom() {
  const nomValue = nom.value.trim();
  if (nomValue === '') {
    displayErrorMessage(nomError, 'Le nom est requis.');
    return false;
  }
  return true;
}

function validatePrenom() {
  const prenomValue = prenom.value.trim();
  if (prenomValue === '') {
    displayErrorMessage(prenomError, 'Le prénom est requis.');
    return false;
  }
  return true;
}

function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue === '') {
    displayErrorMessage(emailError, 'L\'email est requis.');
    return false;
  } else if (emailValue.indexOf('@') === -1 || emailValue.split('@').length !== 2) {
    displayErrorMessage(emailError, 'Format d\'email invalide. Veuillez inclure "@" et le domaine.');
    return false;
  } else if (emailValue.split('@')[1] === '') {
    displayErrorMessage(emailError, 'Veuillez saisir le nom de domaine après "@".');
    return false;
  }
  return true;
}

function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue === '') {
    displayErrorMessage(passwordError, 'Le mot de passe est requis.');
    return false;
  } else if (passwordValue.length < 8) {
    displayErrorMessage(passwordError, 'Le mot de passe doit contenir au moins 8 caractères.');
    return false;
  } else if (!/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/\d/.test(passwordValue)) {
    displayErrorMessage(passwordError, 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre.');
    return false;
  }
  return true;
}

function validateAdresse() {
  const adresseValue = adresse.value.trim();
  if (adresseValue === '') {
    displayErrorMessage(adresseError, 'L\'adresse est requise.');
    return false;
  }

  const adresseRegex = /^\d+\s+\S+/;
  if (!adresseRegex.test(adresseValue)) {
    displayErrorMessage(adresseError, 'Veuillez saisir une adresse valide.');
    return false;
  }

  return true;
}

function validateCodePostal() {
  const codePostalValue = codePostal.value.trim();
  if (codePostalValue === '') {
    displayErrorMessage(codePostalError, 'Le code postal est requis.');
    return false;
  } else if (!/^\d{5}$/.test(codePostalValue)) {
    displayErrorMessage(codePostalError, 'Le code postal doit contenir exactement 5 chiffres.');
    return false;
  }
  return true;
}