const express = require("express")
const router = express.Router()
const {registerUser,getUserByEmail,updateUserByEmail,deleteUserByEmail} = require("../controller/userController");
const { getJWT } = require("../jwt/jwtAuth");
const validateToken = require("../middleWare/validateTokenHandle");

router.post("/register",registerUser);
router.delete("/delete",validateToken,deleteUserByEmail);
router.put("/update",validateToken,updateUserByEmail);
router.get("/profile", getUserByEmail);
router.get("/message", (req,res)=>{
    res.send("Hi")
});
router.get("/jwt",(req,res)=>{
   const accessToken =  getJWT(req.params.email);
   res.status(200).json({accessToken:accessToken});
});
module.exports = router;