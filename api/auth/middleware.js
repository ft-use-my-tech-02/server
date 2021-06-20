const users = require("../users/user-model");

const validateUsernameExists = (req,res,next)=>{
    const {username} = req.body;
    users.findBy({username})
    .then(([user])=>{
        if(!user){
            next({
                status: 401,
                message: "invalid credentials"
            })
        }else{
            req.user = user;
            next();
        }
    })
    .catch(next);
}
const validateUsernameAvailable = (req,res,next)=>{
    const {username} = req.body;
    users.findBy({username})
    .then(([user])=>{
        if(user){
            next({
                status: 401,
                message: "username taken"
            })
        }
        else{
            next();
        }
    })
    .catch(next);
}
const validateUser = (req,res,next)=>{
    const {username,password,email} = req.body;
    if(!username||username.trim().length<4){
        next({
            status:400,
            message:"username is required & need to have at least 4 chars"
        })
    }else if(!password ||password.trim().length<3){
        next({
            status:400,
            message:"password is required & need to have at least 3 chars"
        })
    }else if(!email){
        next({
            status:400,
            message:"email is required"
        })
    }else{
        next();
    }
}
const validateLoginInfo = (req,res,next)=>{
    const {username,password} = req.body;
    if(!username||
        !username.trim()
        ||!password
        || !password.trim()
        ){
        next({
            status:401,
            message:"username and password are required"
        })
    }else{
        next();
    }
}

module.exports = {
    validateUser,
    validateUsernameAvailable,
    validateUsernameExists,
    validateLoginInfo
}