const db = require('../data/db-config');

const findBy = (filter) => {
    return db("users").where(filter);
}
const findUserById = (id) => {
    return db("users as u")
    .join("roles as r","u.role_id","r.role_id")
    .where("user_id",id)
    .select("user_id","username","password","email","role_name")
    .first();
}
const addUser = async (user) =>{
    const [id] = await db("users").insert(user,"user_id");
    return findUserById(id);
}

const updateUser = async (id, user) =>{
    await db("users").where("user_id",id).put(user);
    return findUserById(id);
}

module.exports = {
    findBy,
    addUser
}