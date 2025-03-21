const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
const newUserRouter = require("./routes/new");

app.use("/", indexRouter); // passing callback to route
app.use("/new", newUserRouter); // passing callback to route

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
