const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
  res.render("userform");

}

async function createUsernamePost(req, res) {
  const { user } = req.body;
  await db.insertUsername(user);
  res.redirect("/");
}

async function getUsersSearch(req, res) {
  const searchParam = req.query.search;
  console.log(searchParam);
  const usernames = await db.searchForUsers(searchParam);
  res.send("Found Usernames: " + usernames.map(user => user.username).join(", "));
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  getUsersSearch
};
