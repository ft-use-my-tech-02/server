const items = require("./item-model");

const validateItemOwner = (req,res,next)=>{
    const {owner_id,item_id} = req.params;
    items.findItemById(item_id)
    .then(item=>{
        if(Number(owner_id) === item.owner_id){
            next();
        }else{
            next({
                status:401,
                message:"This item is not yours"
            })
        }
    })
    .catch(next);
}

module.exports = {
    validateItemOwner
}