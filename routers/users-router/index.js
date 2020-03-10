const express = require("express");
const userModel = require("../../modules/user-model");
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
    return res.status(201).json(userId);
  } catch (err) {
    next(err);
  }
});
//ADD NEW USER POST
router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("users").insert(req.body);
    const newUser = await db("users")
      .where("id", id)
      .first();
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
  console.log(newUser);
});
// EDIT USER PUT
// router.put("/:id", async (req, res, next) => {
//   try {
//     const [id] = await db("users")
//       .update(req.params.id, re.body)
//       .then(user => {
//         if (user) {
//           return res.status(200).json(user);
//         } else {
//           return res.status(404).json({ message: "couldn't find user" });
//         }
//       });
//   } catch (err) {
//     return res
//       .status(404)
//       .json({ message: "error on put/edit request muchacho" });
//   }
// });
//DELETE USER
// router.delete("/:id", async (req, res, next) => {
//   try {
//     await usersModel.remove(req.params.id);
//     return res.status(204).json({ message: "user deleted/removed" });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
