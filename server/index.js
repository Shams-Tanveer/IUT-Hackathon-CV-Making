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

app.use("/openai",require("./routes/openAiRoute"));
app.use("/cv",require("./routes/cvRoute"));
app.use("/user",require("./routes/userRoute"));
app.use(errorHanlde);



app.listen(port, () => {
    console.log("Server is running on port " + port);
});


//const {encryptData,decryptData} = require("./security/encryption");
//const message = {
//    "_id": "6415e2c1366805cf72ebdd71",
//    "education": [
//        "\n\nFinal year computer science student"
//    ],
//    "skills": [
//        "\n\nCommunication skills, Technical skills, Teamwork, Problem-solving."
//    ],
//    "experiences": [],
//    "projects": [
//        ""
//    ],
//    "achievements": [],
//    "useremail": "jim@gmail.com",
//    "currentPosition": "\n\nCurrent position: Final year computer science student",
//    "mobile": "",
//    "address": "",
//    "__v": 0
//};
//en = encryptData(message);
//de = decryptData(en);
//console.log(en)
//console.log(de);
