const router = require("express").Router();
const {
    restrict
} = require("./user-middleware");
const users = require("./user-model");

router.put("/:id", restrict, (req,res,next)=>{
    console.log("HERE");
    users.updateUser(req.params.id, req.body)
    .then(user=>{
        res.status(201).json(user)
    })
    .catch(next);
})

module.exports = router;