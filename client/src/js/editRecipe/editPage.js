import { getRecipeFromLocalStorage } from "./localStorage";
import { loadFields } from "./loadFields";
import { addIngredients, deleteIngredient } from "../addRecipe/eventListeners";
import { deleteRecipeButton, updateRecipeButton } from "./eventListreners";

export const editPage = async () => {
  const res = await getRecipeFromLocalStorage();
  const recipe = JSON.parse(res);
  loadFields(recipe);
  deleteIngredient();
  addIngredients();
  deleteRecipeButton(recipe._id);
  updateRecipeButton(recipe._id);
};
