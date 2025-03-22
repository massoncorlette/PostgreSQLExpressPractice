const { Router } = require("express");

const newUserRouter = Router();

newUserRouter.get("/", (req, res) => {
  res.render("userform");
});

module.exports = newUserRouter;