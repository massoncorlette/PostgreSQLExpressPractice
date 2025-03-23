const express = require("express");
const { Router } = require("express");
const { createUsernamePost, getUsernames, createUsernameGet, getUsersSearch } = require("../controllers/controller");

const indexRouter = Router();

indexRouter.use(express.urlencoded({ extended: true })); // parsing form data into req.body


indexRouter.get("/", async (req, res, next) => {
  if (req.query.search) {
    return getUsersSearch(req, res, next);
  } else {
    return getUsernames(req, res, next);
  }
});

indexRouter.get("/new", createUsernameGet);

indexRouter.post("/new", createUsernamePost);

module.exports = indexRouter;
