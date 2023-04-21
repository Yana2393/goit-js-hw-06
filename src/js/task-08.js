const login = document.querySelector('.login-form');

login.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email.length === 0 || password.length === 0) {
        alert("Всі поля мають бути заповнені");
        return;
    }
    const formData = {
        email,
        password
    }
    login.reset();
    console.log(formData);
})
