const mongoose = require("mongoose")

const cvinfoSchema = mongoose.Schema({
    useremail:{
        type: String
    },
    currentPosition:{
        type: String
    },
    mobile:{
        type: String,
    },
    address:{
        type: String
    },
    education: [{
        type: String,
    }],
    socialMedia:{
        type: String
    },
    skills: [{
        type: String
    }],
    experiences:[{
        type: String
    }],
    projects:[{
        type: String
    }],
    achievements:[{
        type: String
    }]
});

module.exports = mongoose.model("CVINFO",cvinfoSchema);