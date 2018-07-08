let express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("You're awsome. Follow me @ instagram.com/raja__raghav");
});
app.listen(process.env.PORT || 3000);
