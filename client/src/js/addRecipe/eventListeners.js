import { generateElements } from "./generateElement";
import { createRecipe } from "../requests/axios-request";

export const addIngredients = () => {
  document
    .querySelector(".ingredient-button")
    .addEventListener("click", (e) => {
      const divIngredient = document.querySelector(".ingredient");
      const ingredient = document.querySelector(".add-ingredient");

      generateElements(divIngredient, ingredient);

      ingredient.value = "";
      deleteIngredient();
    });
};

export const deleteIngredient = () => {
  document.querySelectorAll(".delete-ingredient-button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".wrapper-ingredient").forEach((wraper) => {
        if (wraper === e.target.parentNode) {
          e.target.parentNode.remove();
        }
      });
    });
  });
};

export const addRecipe = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const ingredientString = [];
    e.target.querySelectorAll(".wrapper-ingredient").forEach((el) => {
      ingredientString.push(el.querySelector("label").innerText);
    });

    const ingredientsArrayOfObject = ingredientString.map((ingredient) => {
      return { ingredientName: ingredient };
    });

    const recipeObj = {
      recipeName: e.target[0].value,
      description: e.target[1].value,
      ingredients: ingredientsArrayOfObject,
    };

    createRecipe(recipeObj);
    location.href = "http://localhost:8080";
  });
};
