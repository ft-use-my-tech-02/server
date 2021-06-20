exports.seed = function (knex, Promise) {
    return knex('roles').insert([
      { role_name: "owner" },
      { role_name: "renter" },
    ]);
  };