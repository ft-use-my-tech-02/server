const {JWT_SECRECT} = require("../config/secrect");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const restrict = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
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

const validateChangePassword = (req,res,next) => {
    const {password} = req.body;
    if(password){
        const hash = bcrypt.hashSync(password,8);
        req.body.password = hash;
        next();
    }else{
        next();
    }
}

module.exports = {
    restrict,
    validateChangePassword
}

