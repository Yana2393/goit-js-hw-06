const inputSizeControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

inputSizeControl.addEventListener('input', (event) => {
    const fontSize = event.target.value;
    text.style.fontSize = fontSize + 'px';
})