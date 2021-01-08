import { generateListener } from "./generateListener";

export const loadFields = (recipe) => {
  const divIngredient = document.querySelector(".ingredient");
  const name = document.querySelector(".add-recipe");
  const description = document.querySelectorAll("textarea");
  name.value = recipe.recipeName;
  description[0].innerHTML = recipe.description;

  recipe.ingredients.forEach((rec) => {
    generateListener(divIngredient, rec.ingredientName);
  });
};
