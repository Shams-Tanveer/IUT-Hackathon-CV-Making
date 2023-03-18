const {constanst} = require("../constants/errorConstants")
const errorHandle = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode){
        case constanst.VALIDATION_ERROR:
            res.json({title:"Validation Error",message: err.message, stackTrace: err.stackTrace});
        case constanst.NOT_FOUND:
            res.json({title:"Not Found",message: err.message, stackTrace: err.stackTrace});
        case constanst.FORBIDDEN:
            res.json({title:"Forbidden Access",message: err.message, stackTrace: err.stackTrace});
        case constanst.UNAUTHORIZED:
            res.json({title:"Unautorized User",message: err.message, stackTrace: err.stackTrace});
        default:
            console.log("No Error. All Good")
            break;    
        }
    };

module.exports = errorHandle