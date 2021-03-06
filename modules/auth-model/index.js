const db = require("../../database/dbConfig");

async function userAccount(username) {
  const user = await db("users")
    .where({ username })
    .first();
  if (user) {
    return user;
  }
  return null;
}

module.exports = { userAccount };
