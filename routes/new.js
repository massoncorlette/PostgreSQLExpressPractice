const { Router } = require("express");

const newUserRouter = Router();

newUserRouter.get("/new", (req, res) => {
  res.render("userform");
});

module.exports = newUserRouter;