const express = require("express");
const { Router } = require("express");
const { createUsernamePost, getUsernames, createUsernameGet } = require("../controllers/controller");

const indexRouter = Router();

indexRouter.use(express.urlencoded({ extended: true })); // parsing form data into req.body


indexRouter.get("/", getUsernames);

indexRouter.get("/new", createUsernameGet);

indexRouter.post("/new", createUsernamePost);

module.exports = indexRouter;
