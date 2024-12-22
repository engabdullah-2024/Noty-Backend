const express = require("express");
const userModel = require("../model/UserModel");

const router = express.Router();


// API user diwaan galinaayo
router.post("/register", async (req, res) => {
    const newUser = new userModel(req.body);
    const saveUser = await newUser.save();
    if (saveUser) {
        res.send("User has been registered");
    } else {
        res.status(400).send("Error registering user");
    }
});

// API users ka soo bandhigaayo
router.get("/user/login", (req, res) => {
    res.send("Login endpoint");
});

// API oo login samenayo
router.post("/user/login", async (req, res) => {
    const user = await userModel.findOne(req.body).select("-password");
    if (user) {
        res.send({ success: "User found", user });
    } else {
        res.status(404).send("User not found");
    }
});

module.exports = router;