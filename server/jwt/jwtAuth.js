const jwt = require("jsonwebtoken");

const getJWT = (email)=>{
    const accessToken = jwt.sign({
        email:email,
    },
    process.env.ACCESS_TOKEN,
    {expiresIn:"2m"}//1440m
    );
    return accessToken;
}


const verifyJWT = (token,req,res,next)=>{
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
        if(err){
            res.status(401);
            throw new Error("User is not authorized");
        }
        req.user = decoded.email;
        console.log(req.email)
        next();
    });
}

module.exports = {getJWT,verifyJWT};