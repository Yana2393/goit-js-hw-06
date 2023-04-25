const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(input);

input.addEventListener('input', (event) => {
    if (event.target.value === '') {
        output.innerHTML = 'Anonymous';
    } else {
        output.innerHTML = event.target.value;
    }
});
