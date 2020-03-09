const express = require("express");
const router = express.Router();

//ROOT ROUTER
router.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome to the carlsapp!" });
});

// /API/
router.get("/api", async (req, res) => {
  res.status(200).json({ message: "Welcome to the API route!" });
});

module.exports = router;
