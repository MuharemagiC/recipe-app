export const getRecipeFromLocalStorage = () => {
  const recipe = localStorage.getItem("Recipes");

  try {
    return recipe != null ? recipe : [];
  } catch (e) {
    return [];
  }
};
