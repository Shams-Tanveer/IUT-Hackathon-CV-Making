const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDb = require("./config/dbConnection");
const errorHanlde = require("./middleWare/errorHandler");
const port = process.env.PORT || 5000;
connectDb();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    method: "GET,POST,PUT,UPDATE,DELETE",
    credentials: true
}))

app.use("/user",require("./routes/userRoute"));
app.use(errorHanlde);



app.listen(port, () => {
    console.log("Server is running on port " + port);
});

/*
const {encryptData,decryptData} = require("./security/encryption");
en = encryptData("This is a message")
de = decryptData(en);
console.log(en)
console.log(de);

*/