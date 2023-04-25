const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

const newArray = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;

  return ingredientsItem.outerHTML.toString();
})

ingredientsListEl.insertAdjacentHTML('beforeend', newArray.join(''));