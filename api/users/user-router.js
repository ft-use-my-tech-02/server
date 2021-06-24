const router = require("express").Router();
const {
    restrict,
    validateChangePassword
} = require("./user-middleware");
const users = require("./user-model");

router.put("/:id", restrict, validateChangePassword, (req,res,next)=>{
    users.updateUser(req.params.id, req.body)
    .then(([user])=>{
        res.status(201).json(user)
    })
    .catch(next);
})

router.get("/:id",restrict, (req,res,next)=>{
    users.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(next);
})

module.exports = router;