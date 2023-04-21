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

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;
  ingredientsListEl.append(ingredientsItem);
})



