const loginFormElem = document.querySelector('form.login-form');

loginFormElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const userObj = {
      email,
      password,
    };
    console.log(userObj);
    e.target.reset();
  }
});