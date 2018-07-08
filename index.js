let express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("You're awsome. Follow me @ instagram.com/raja__raghav");
});
