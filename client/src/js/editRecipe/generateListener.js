export const generateListener = (divIngredient, ingredient) => {
  const wrapperIngredient = document.createElement("div");
  wrapperIngredient.classList.add("wrapper-ingredient");

  const inputcheck = document.createElement("input");
  inputcheck.setAttribute("type", "checkbox");
  inputcheck.checked = true;

  const label = document.createElement("label");
  label.textContent = ingredient;

  const buttonAdd = document.createElement("button");
  buttonAdd.textContent = "X";
  buttonAdd.classList.add("delete-ingredient-button");
  buttonAdd.setAttribute("type", "button");

  label.appendChild(inputcheck);
  wrapperIngredient.append(label);
  wrapperIngredient.appendChild(buttonAdd);

  divIngredient.appendChild(wrapperIngredient);
};
