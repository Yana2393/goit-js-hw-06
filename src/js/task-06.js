const input = document.querySelector('#validation-input');
    
input.addEventListener('blur', (event) => {
    const dataLength = event.target.dataset.length;
    const textLength = event.target.value.length;
    if (+dataLength === textLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
})
