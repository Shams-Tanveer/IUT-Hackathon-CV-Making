const express = require("express");
const validateToken = require("../middleWare/validateTokenHandle");
const { collectInfo, retrieveInfo,updateCv } = require("../controller/cvinfoController");
const router = express.Router()

router.post("/updateabout", validateToken, async (req, res) => {
    const aboutMe = req.body.aboutme;
    console.log(aboutMe);
    const value = await collectInfo(aboutMe, req.email);
    res.status(value).send({ message: value == 200 ? "Got" : "Wrong" });

});

router.get("/getinfo", validateToken,retrieveInfo);

router.put("/updatecv",validateToken,updateCv);
module.exports = router;