import { getAllRecipes } from "../requests/axios-request";
import { recipeRender } from "./recipeRender";
import { inputListener, editListener } from "./eventListeners";
import { redirectAddButtonListener } from "./eventListeners";

const renderContent = async (contentDiv) => {
  const recipes = await getAllRecipes();
  const filters = {
    serachText: "",
  };

  if (recipes.length === 0) {
    const message = document.createElement("h2");
    message.classList.add("message");
    message.textContent = "Add Recipe...";
    redirectAddButtonListener();
    return contentDiv.appendChild(message);
  }

  recipeRender(recipes, filters, contentDiv);

  inputListener(recipes, filters, contentDiv);
  editListener(recipes);
  redirectAddButtonListener();
};

export default renderContent;
