import { recipeRender } from "./recipeRender";

export const inputListener = (recipes, filters, contentDiv) => {
  document.querySelector(".search-recipe").addEventListener("input", (e) => {
    filters.serachText = e.target.value;
    recipeRender(recipes, filters, contentDiv);
  });
};

export const redirectAddButtonListener = () => {
  document.querySelector(".add-button").addEventListener("click", () => {
    location.href = "http://localhost:8080/addRecipe.html";
  });
};

export const editListener = (recipes) => {
  document.querySelectorAll(".content").forEach((wrapper) => {
    wrapper.addEventListener("click", (e) => {
      const clickedRecipe = recipes.find(
        (recipe) => recipe.recipeName === e.path[1].childNodes[0].innerText
      );

      if (clickedRecipe === undefined) {
        return;
      } else {
        localStorage.setItem("Recipes", JSON.stringify(clickedRecipe));
        window.location.href = "http://localhost:8080/editRecipe.html";
      }
    });
  });
};
