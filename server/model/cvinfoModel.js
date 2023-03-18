const mongoose = require("mongoose")

const cvinfoSchema = mongoose.Schema({
    useremail:{
        type: String,
        default: ''
    },
    currentPosition:{
        type: String,
        default: ''
    },
    mobile:{
        type: String,
        default: ''
    },
    address:{
        type: String,
        default: ''
    },
    education: {
        type: String,
        default: ''
    },
    facebook:{
        type: String,
        default: ''
    },
    tweeter:{
        type:String,
        default: ''
    },
    skills:{
        type: String,
        default: ''
    },
    experiences:{
        type: String,
        default: ''
    },
    projects:{
        type: String,
        default: ''
    },
    achievements:{
        type: String,
        default: ''
    }
});

module.exports = mongoose.model("CVINFO",cvinfoSchema);