const {JWT_SECRECT} = require("../config/secrect");
const jwt = require("jsonwebtoken");

const restrict = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        console.log(token);
        jwt.verify(token,JWT_SECRECT,(error, decoded)=>{
            if(error){  
                next({
                    status:401,
                    message:"invalid credential"
                })
            }else{
                req.decodedJwt = decoded;
                next();
            }
        })
    }else{
        next({
            message:"token is required"
        })
    }
}

module.exports = {
    restrict,
    
}

