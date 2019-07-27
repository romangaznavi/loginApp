const express = require("express");
const router = express.Router();


router.get("/", (req, res, next)=>{
 res.json({message: "Default route from user"});
})


module.exports = router;