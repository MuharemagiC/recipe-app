const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    default: "",
  },
  ingredients: [
    {
      ingredientName: {
        type: String,
        trim: true,
      },
    },
  ],
});

const Recipe = new mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
