const bcrypt = require("bcryptjs");
const db = require("../../database/dbConfig");

function find() {
  return db("users").select("id", "firstName", "lastName", "username");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
//ADDING USER POST
async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);
  return db("users").insert(user);
}
// UPDATE PUT
function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes);
}
// DELETE
function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};
