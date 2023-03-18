const express = require("express");
const { chatWithOpenAi }= require("../controller/openaiController");
const router = express.Router()

router.post("/chat",chatWithOpenAi);
module.exports = router;