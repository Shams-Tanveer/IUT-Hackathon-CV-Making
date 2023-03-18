const express = require("express");
const {collectInfo} = require("../controller/cvinfoController");
const router = express.Router()
const {registerUser,registerSocialUser,getUserByEmail,updateUserByEmail,deleteUserByEmail} = require("../controller/userController");
const { getJWT } = require("../jwt/jwtAuth");
const validateToken = require("../middleWare/validateTokenHandle");

router.post("/register",registerUser);
router.post("/register/social",registerSocialUser);
router.delete("/delete",validateToken,deleteUserByEmail);
router.put("/update",validateToken,updateUserByEmail);
router.get("/profile", getUserByEmail);
router.post("/aboutme",validateToken, async(req,res)=>{
    const aboutMe = req.body.aboutme;
    const value = await collectInfo(aboutMe,req.email);
    console.log(value);
    res.status(value).send({ message:value==200 ? "Got" : "Wrong"});
});
router.get("/jwt",(req,res)=>{
    console.log(req.query.email);
   const accessToken =  getJWT(req.query.email);
   res.status(200).json({accessToken:accessToken});
});
module.exports = router;