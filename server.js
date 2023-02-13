const express = require("express");
const app = express();
const PORT = 3000;

// Random email generator
const helper = require("./randEmail");

// Routes
app.get("/api", (req, res) => {
  res.send(JSON.stringify(helper.getRandomEmail()));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
