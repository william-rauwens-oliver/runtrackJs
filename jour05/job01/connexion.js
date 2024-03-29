const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

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
}

const isValidPassword = password => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/;
    return re.test(password);
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

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
};