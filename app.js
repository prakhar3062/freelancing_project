const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/profile", async (req, res) => {
  res.render("profile");
});

app.get("/chats", async (req, res) => {
  res.render("chats");
});
app.get("/login", async (req, res) => {
  res.render("login");
});
app.get("/register", async (req, res) => {
  res.render("register");
});

app.listen(3000, () => console.log("on port 3000!!"));
