const db = require("../data/db-config");

const getAll = () => {
    return db("requests");
}
const getRenterRequests = (owner_id) => {
    return db("requests as r")
    .join("items as i","r.item_id","i.item_id")
    .join("users as u","r.renter_id","u.user_id")
    .select("request_id","i.item_id","item_name","username",
    "name","date_need_item","how_many_days",
    "price_a_day",
    "r.renter_id")
    .where("owner_id",owner_id);
}

const getOwnerResponse = (renter_id) => {
    return db("requests as r")
    .join("items as i","r.item_id","i.item_id")
    .join("users as u","r.renter_id","u.user_id")
    .select("request_id","i.item_id","item_name","username",
    "name","date_need_item","how_many_days",
    "price_a_day",
    "r.renter_id")
    .where("r.renter_id",renter_id);
}
const addRequest = (new_request) => {
    return db("requests").insert(new_request,["*"]);
}

const deleteRequest = async (request_id) =>{
    await db("requests").where("request_id",request_id).del();
}

module.exports = {
    getAll,
    getRenterRequests,
    getOwnerResponse,
    addRequest,
    deleteRequest
}