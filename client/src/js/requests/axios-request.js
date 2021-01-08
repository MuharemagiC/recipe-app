const axios = require("axios");

export const getAllRecipes = async () => {
  try {
    const recipes = await axios.get("http://localhost:3000/recipes");
    return recipes.data;
  } catch (e) {
    return e;
  }
};

export const createRecipe = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/recipes", data);
    console.log(res);
  } catch (e) {
    return e;
  }
};

export const deleteRecipe = async (_id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/recipes/${_id}`);
  } catch (e) {
    return e;
  }
};

export const updateRecipe = async (_id, data) => {
  try {
    const res = await axios.patch(`http://localhost:3000/recipes/${_id}`, data);
  } catch (e) {
    return e;
  }
};
