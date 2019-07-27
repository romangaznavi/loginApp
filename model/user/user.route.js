const express = require("express");
const router = express.Router();
const UserModel = require("./user.model");

router.post("/register", UserModel.register);
router.post("/login", UserModel.login);

router.get("/", (req, res, next)=>{
    res.json({message: "Default route from user"});
});

module.exports = router;