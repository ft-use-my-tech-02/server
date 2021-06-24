const router = require("express").Router();
const bcrypt = require("bcryptjs");
const users = require("../users/user-model");
const {
    validateUser,
    validateUsernameAvailable,
    validateUsernameExists,
    validateLoginInfo
} = require("./middleware");
const tokenBuilder = require("./tokenbuilder");

router.post("/login",validateLoginInfo,validateUsernameExists,(req,res,next)=>{
    const {password} = req.body;
    if(bcrypt.compareSync(password,req.user.password)||password===req.user.password){
        const token = tokenBuilder(req.user);
        res.status(200).json({
            message:`Welcome back ${req.user.username}`,
            user_id: req.user.user_id,
            token
        })
    }else{
        next({
            status:401,
            message:"invalid credentials"
        })
    }
})

router.post("/register",validateUser,validateUsernameAvailable,(req,res,next)=>{
    const {password} = req.body;
    const hash = bcrypt.hashSync(password, 8);
    users.addUser({...req.body, password: hash})
    .then(([newUser]) => {
        res.status(201).json(newUser);
    })
    .catch(next);
})

module.exports = router;