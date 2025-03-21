const express = require("express");

const { Router } = require("express");

const indexRouter = Router();

indexRouter.use(express.urlencoded({ extended: true })); //parsing form data to req.body

indexRouter.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");

  res.render("index",);
});

indexRouter.post("/new", (req, res) => {
  res.render("new");
  console.log("username to be saved: ", req.body.username)
});

module.exports = indexRouter;