const { request } = require("express");
const express = require("express");
require("./db/mongoose");

const recipeRoutes = require("./routes/recipeRoutes");
const Cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(Cors());

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(recipeRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../../client/public/dist"));
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
