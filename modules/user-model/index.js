const bcrypt = require("bcryptjs");
const db = require("../../database/dbConfig");
// GET USERS
function find() {
  return db("users").select();
}
//findByID USER :id
function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
//POST ADDING USER
async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);
  return db("users").insert(user);
}
// UPDATE PUT
function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);

  return findById(id);
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
