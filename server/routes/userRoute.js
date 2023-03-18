const express = require("express")
const router = express.Router()
const {registerUser,getUserByEmail,updateUserByEmail,deleteUserByEmail} = require("../controller/userController");

router.post("/register",registerUser);
router.delete("/delete",deleteUserByEmail);
router.put("/update",updateUserByEmail);
router.get("/profile",getUserByEmail);
router.get("/message",(req,res)=>{
    res.send("hi");
});
module.exports = router;