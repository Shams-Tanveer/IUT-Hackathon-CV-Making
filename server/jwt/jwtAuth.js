const jwt = require("jsonwebtoken");

const getJWT = (email)=>{
    const accessToken = jwt.sign({email},
    process.env.ACCESS_TOKEN,
    {expiresIn:"1440m"}//1440m
    );
    return accessToken;
}


const verifyJWT = (token,req,res,next)=>{
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
        if(err){
            res.status(401);
            throw new Error("User is not authorized");
        }
        res.email = decoded.email;
        next();
    });
}

module.exports = {getJWT,verifyJWT};