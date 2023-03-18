const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { verifyJWT } = require("../jwt/jwtAuth");

const validateToken = asyncHandler(async(req,res,next)=>{

    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;


    if (authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        verifyJWT(token,req,res,next);
    }

    if(!token){
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
});

module.exports = validateToken;