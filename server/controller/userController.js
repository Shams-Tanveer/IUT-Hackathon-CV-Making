const asyncHandler = require("express-async-handler");
const { getJWT } = require("../jwt/jwtAuth");
const User = require("../model/userModel");


const registerUser = asyncHandler(async(req,res)=>{
    const {name,imageUrl,email} = req.body;
    if (!name || !imageUrl || !email){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    
    const availableUser = await User.findOne({email});
    if (availableUser){
        res.status(400);
        throw new Error("Users already exist");
    }
    const user = User({name,imageUrl,email});
    
    const registeredUser = await user.save();
    if(registeredUser){
        const accessToken = getJWT(registerUser.email);
        console.log(accessToken);
        res.status(200).json({accessToken:accessToken});
    }else{
        res.status(400);
        throw new Error("User registration unsuccessful");
    }
});


const getUserByEmail = asyncHandler(async(req,res)=>{
    const user = await User.findOne({email: req.body.email});

    if (!user){
        res.status(404);
        throw new Error("User not found");
    }
    res.send(user)
});


const updateUserByEmail = asyncHandler(async(req,res)=>{
    const user = await User.findOne({email:req.body.email});

    if (!user){
        res.status(404);
        throw new Error("user not found");
    }
    const updatedUser = await User.findOneAndUpdate(
        req.params.email,
        req.body,
        {new: true}
    );
    res.status(200).send({user:updatedUser})
});

const deleteUserByEmail = asyncHandler(async(req,res)=>{
    
    const user = await User.findOne({email:req.body.email});

    if (!user){
        res.status(404);
        throw new Error("user not found");
    }
    await User.findOneAndRemove(req.params.email);
    res.send({user:user})
});

module.exports = {registerUser,getUserByEmail,updateUserByEmail,deleteUserByEmail};