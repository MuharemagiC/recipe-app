const express = require("express");

const Recipe = require("../models/recipe");

const router = express.Router();

router.post("/recipes", async (req, res) => {
  console.log(req.body);
  const recipe = await new Recipe(req.body);

  try {
    await recipe.save();
    res.status(201).send(recipe);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.send(recipes);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndRemove({ _id: req.params.id });

    if (!recipe) {
      res.status(400).send();
    }

    res.send(recipe);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/recipes/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["recipeName", "description", "ingredients"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Ivalid updates!" });
  }

  try {
    const recipe = await Recipe.findById(req.params.id);

    updates.forEach((update) => {
      recipe[update] = req.body[update];
    });

    await recipe.save();

    if (!recipe) {
      return res.status(404).send();
    }

    res.send(recipe);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
