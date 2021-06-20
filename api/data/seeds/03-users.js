exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { username: "adam1",password:"123",email:"abc123@gmail.com",role_id: 1 },
    { username: "adam2",password:"123",email:"abcd123@gmail.com",role_id: 2 },
    { username: "owner",password:"123",email:"b123@gmail.com",role_id: 1 },
    { username: "renter",password:"123",email:"a123@gmail.com",role_id: 2 },
  ]);
};