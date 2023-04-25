const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]');

let decrementButtonCounterValue = 0;
let incrementButtonCounterValue = 0;

decrementButton.addEventListener('click', () => {
    decrementButtonCounterValue--;
    console.log(decrementButtonCounterValue);
    decrementButton.textContent = decrementButtonCounterValue;

});
incrementButton.addEventListener('click', () => {
    incrementButtonCounterValue++;
    console.log(incrementButtonCounterValue);
    incrementButton.textContent = incrementButtonCounterValue;

});





