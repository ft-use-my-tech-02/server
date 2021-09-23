exports.seed = function (knex,) {
  return knex('users').insert([
    { name: "Kyle", username: "adam1", password: "123", email: "abc123@gmail.com"},
    { name: "July", username: "adam2", password: "123", email: "abcd123@gmail.com" },
    { name: "June", username: "owner", password: "123", email: "b123@gmail.com" },
    { name: "Anna", username: "renter", password: "123", email: "a123@gmail.com"},
  ]);
};