const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue--;
    console.log(counterValue);
});
incrementButton.addEventListener('click', () => {
    counterValue++;
    console.log(counterValue);
});

