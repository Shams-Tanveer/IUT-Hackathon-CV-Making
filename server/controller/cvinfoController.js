const CvInfo = require("../model/cvinfoModel");
const { getInfoWithOpenAi } = require("./openaiController");
const asyncHandler = require("express-async-handler");

const listOfQuestion = ["current position", "mobile number", "address", "educational qualification", "skills", "projects"];
const attrributes = ["currentPosition", "mobile", "address", "education", "skills", "projects"]



const collectInfo = async (prompt, email) => {
    var cvInfo = new CvInfo();
    cvInfo["useremail"] = email;
    for (let i = 0; i < listOfQuestion.length; i++) {
        question = prompt + "From this passage what is the " + listOfQuestion[i] + " information. Just give the output nothing else. If answer is not available then return Nothing in exact answer format without heading.";
        answer = await getInfoWithOpenAi(question, 100)
        console.log(answer);
        if (answer.includes("Nothing")) {
            cvInfo[attrributes[i]] = "";
        }
        else {
            cvInfo[attrributes[i]] = answer
        }
    }

    const availableData = await CvInfo.findOne({ useremail: email });
    cvInfo["_id"] = availableData["_id"];
    if (availableData) {
        const updatedCvInfo = await CvInfo.findOneAndUpdate(
            {useremail:email},
            cvInfo,
            {new: true}
        );
        return 200;
    }

    const savedData = await cvInfo.save();

    if (savedData) {
        return 200;
    } else {
        return 400;
    }
}


const retrieveInfo = asyncHandler(async(req,res)=>{
    console.log("IIIII");
    const cvInfo = await CvInfo.findOne({useremail: req.body.email});

    if (!cvInfo){
        res.status(404);
        throw new Error("Information not found");
    }

    res.send(cvInfo);
});

module.exports = {collectInfo,retrieveInfo};