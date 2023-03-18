const express = require("express")
const router = express.Router()
const {registerUser,getUserByEmail,updateUserByEmail,deleteUserByEmail} = require("../controller/userController");
const validateToken = require("../middleWare/validateTokenHandle");

router.post("/register",registerUser);
router.delete("/delete",validateToken,deleteUserByEmail);
router.put("/update",validateToken,updateUserByEmail);
router.get("/profile",validateToken, getUserByEmail);
router.get("/message",(req,res)=>{
    res.send("hi");
});
module.exports = router;