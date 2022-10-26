const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");
const li = ingredients.length;
for (let index = 0; index < ingredients.length; index++) {
  const liIngredients = document.createElement("li");
  liIngredients.textContent = ingredients[index];
  liIngredients.class = "item";
  ul.prepend(liIngredients);
  console.log(ul);
  console.log(liIngredients.class);
}
