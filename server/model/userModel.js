const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("USERS",userSchema);