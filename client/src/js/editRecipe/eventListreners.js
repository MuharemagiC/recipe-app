import { deleteRecipe, updateRecipe } from "../requests/axios-request";

export const deleteRecipeButton = (_id) => {
  document.querySelector(".delete-button").addEventListener("click", () => {
    deleteRecipe(_id);
    location.href = "http://localhost:8080";
  });
};

export const updateRecipeButton = (_id) => {
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

    updateRecipe(_id, recipeObj);
    location.href = "http://localhost:8080";
  });
};
