const router = require("express").Router();
const items = require("./item-model");
const {
    restrict 
} = require("../users/user-middleware");
const {
    validateItemOwner
} = require("./item-middleware");

//middleware for checking the input
router.get("/",(req,res,next)=>{
    items.getAvailableItems()
    .then(allItems =>{
        res.json(allItems)
    })
    .catch(next);
})

router.get("/rent/:renter_id",restrict, (req,res,next)=>{
    items.getAllRentedItems(req.params.renter_id)
    .then(allItems=>{
        res.json(allItems)
    })
    .catch(next);
})

router.get("/owned/:owner_id",restrict,(req,res,next)=>{
    items.getAllOwnedItems(req.params.owner_id)
    .then(allItems=>{
        res.json(allItems)
    })
    .catch(next);
})

router.post("/",restrict,(req,res,next)=>{
    items.addItem(req.body)
    .then(([item])=>{
        res.status(201).json(item);
    })
    .catch(next);
})

router.put("/:owner_id/:item_id",restrict, validateItemOwner, (req,res,next)=>{
    items.updateItem(req.params.item_id, req.body)
    .then(([item])=>{
        res.status(201).json(item);
    })
    .catch(next);
})

router.delete("/:owner_id/:item_id",restrict,validateItemOwner, async (req,res,next)=>{
    try{
        await items.deleteItem(req.params.item_id);
        res.end();
    } catch(error){
        next(error);
    }
})

module.exports = router;