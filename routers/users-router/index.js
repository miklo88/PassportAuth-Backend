const express = require("express");
// userModel import

const router = express.Router();

//GET USER
router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});
//GET USER ID
router.get("/:id", async (req, res, next) => {
  try {
    const userId = await userModel
      .findById(req.params.id)
      .where("id", id)
      .first();
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
//ADD NEW USER
router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("blogdb").insert(req.body);
    const newUser = await db("blogdb")
      .where("id", id)
      .first();
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
  console.log(newUser);
});
// edit user
//delete user
module.exports = router;
