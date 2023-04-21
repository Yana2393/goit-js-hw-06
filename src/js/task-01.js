const categories = document.querySelector('#categories');
const categoriesChildren = Array.from(categories.children);

console.log('Number of categories:', categoriesChildren.length);

categoriesChildren.forEach(category => {
    const categoryTitleElement = category.children[0];
    const categoryTitleText = categoryTitleElement.textContent;
    console.log('Category:', categoryTitleText);

    const categoryListElement = category.children[1];
    console.log('Elements:', categoryListElement.children.length);
});
