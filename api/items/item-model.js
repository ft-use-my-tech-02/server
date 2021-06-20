const db = require("../data/db-config");

const getAvailableItems = ()=>{
    return db("items").where("renter_id",null);
}
const getAllRentedItems = (id)=>{
    return db("items").where("renter_id",id);
}

const getAllOwnedItems = (id)=>{
    return db("items").where("owner_id",id);
}
const addItem = (item) => {
    return db("items").insert(item,["item_id","item_name",
    "owner_id","renter_id","price_a_day","notes"])
}

const findItemById = (id)=>{
    return db("items").where("item_id",id).first();
}

const updateItem = (id,item) =>{
    return db("items").where("item_id",id).update(item,["item_id",
    "item_name","owner_id","renter_id","price_a_day","notes"])
}

const deleteItem = (id) => {
    return db("items").where("item_id",id).del();
}

module.exports = {
    addItem,
    findItemById,
    updateItem,
    deleteItem,
    getAvailableItems,
    getAllRentedItems,
    getAllOwnedItems,
}


