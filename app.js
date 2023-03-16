const express = require("express");
const app = express();
const router = require("./router");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está rodando");
});
