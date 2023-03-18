const CvInfo = require("../model/cvinfoModel");
const { getInfoWithOpenAi } = require("./openaiController");
const asyncHandler = require("express-async-handler");
const { encryptData, decryptData } = require("../security/encryption");

const listOfQuestion = ["current position", "mobile number", "address", "educational qualification", "skills", "projects"];
const attrributes = ["currentPosition", "mobile", "address", "education", "skills", "projects","useremail","facebook","tweeter","experiences","achievements"]



const collectInfo = async (prompt, email) => {
    var cvInfo = new CvInfo();
    cvInfo["useremail"] = encryptData(email);

    for (let i = 0; i < listOfQuestion.length; i++) {
        question = prompt + "From this passage what is the " + listOfQuestion[i] + " information. Just give the output nothing else. If answer is not available then return Nothing in exact answer format without heading.";
        answer = await getInfoWithOpenAi(question, 100)
        console.log(answer);
        if (!answer.includes("Nothing")) {
            cvInfo[attrributes[i]] = encryptData(answer);
        }
    }
    const availableData = await CvInfo.findOne({ useremail: encryptData(email) });
    if (availableData) {
        cvInfo["_id"] = availableData["_id"];
        for(var i=7;i<attrributes.length;i++){
            cvInfo[attrributes[i]] = availableData[attrributes[i]]
        }
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
    const cvInfo = await CvInfo.findOne({useremail: encryptData(req.body.email)});
    if (!cvInfo){
        res.status(404);
        throw new Error("Information not found");
    }
    console.log(attrributes.length)
    for (var i=0; i<attrributes.length;i++){
        cvInfo[attrributes[i]] = cvInfo[attrributes[i]].replace(/[\r\n]/gm, '');
        if(cvInfo[attrributes[i]] !=""){
            cvInfo[attrributes[i]] = decryptData (cvInfo[attrributes[i]])
            console.log(cvInfo[attrributes[i]])
        }
        else{
            cvInfo[attrributes[i]] = cvInfo[attrributes[i]]
            console.log(cvInfo[attrributes[i]])
        }
        
    }

    console.log(cvInfo)
    res.status(200).json({cv:cvInfo});
});

module.exports = {collectInfo,retrieveInfo};