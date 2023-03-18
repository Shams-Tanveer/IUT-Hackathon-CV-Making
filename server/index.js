const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const {encryptData,decryptData} = require("./security/encryption");

const port = process.env.PORT || 5000;
app.use(express.json());


en = encryptData("This is a message")
de = decryptData(en);
console.log(en)
console.log(de);
app.listen(port, () => {
    console.log("Server is running on port " + port);
});