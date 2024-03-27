const form = document.querySelector('.login-form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const submitButton = document.querySelector('button');

function submitForm(event) {
  event.preventDefault();

  if (email.value === '' || password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const elements = event.currentTarget.elements;
    const info = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };
    console.log(info);
    event.currentTarget.reset();
  }
}

form.addEventListener('submit', submitForm);