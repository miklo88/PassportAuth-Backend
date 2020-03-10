const express = require("express");
const bcrypt = require("bcryptjs");
const usersModel = require("../modules/user-model")
// const { validateMiddleware } = require("")
// const authenticationModel = require("") 
// const generateToken = require("")

const router = express.Router();

// CREATE NEW USER POST
router.post("/register", async (req, res, next) => {
    try {
        const user = usersModel.add(req.body);
        rerturn res.status(201).json({ message: "welcome new created user0", user });
    } catch (err) {
        console.log(err)
        next(err)
    }
})
// LOGIN POST
router.post("/login", validateMiddleware, async (req, res, next) => {
    try {
let { username, password } = req.body;
const user = await authenticationModel.userAccount(email);
const passwordValid = await bcrypt.compare(password, user.password);
// if user and password are good then you get token
console.log(passwordValid, user)
if (user && password) {
const token = generateToken(user)
res.status(200).json({ message: `Bienvenidos ${user.username}!`, token });
} else {
    res.status(401).json({ 
        error: "Invalid Credentials"
    });
    }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = server;
