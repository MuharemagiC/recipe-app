export const recipeRender = (recipes, filters, contentDiv) => {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.recipeName
      .toLowerCase()
      .includes(filters.serachText.toLocaleLowerCase());
  });

  contentDiv.innerHTML = "";

  filteredRecipes.forEach((recipe) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-recipes");
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.textContent = recipe.recipeName;
    description.textContent = recipe.description;

    wrapper.appendChild(title);
    wrapper.appendChild(description);

    contentDiv.appendChild(wrapper);
  });
};
