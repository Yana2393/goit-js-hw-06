const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(input);

input.addEventListener('input', (event) => {
    output.innerHTML = event.target.value;
});
