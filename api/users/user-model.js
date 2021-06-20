const db = require('../data/db-config');

const findBy = (filter) => {
    return db("users").where(filter);
}

const addUser = (user) =>{
    return db("users").insert(user,["user_id","username",
    "password","email","profile_image","name","role_id"]);
}

const updateUser = (id, user) =>{
    return db("users").where("user_id",id).update(user,["user_id","username",
    "password","email","profile_image","name","role_id"]);
}

module.exports = {
    findBy,
    addUser,
    updateUser,
}