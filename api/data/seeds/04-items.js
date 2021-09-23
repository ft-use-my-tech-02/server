exports.seed = function (knex, Promise) {
  return knex('items').insert([
    { item_name: "camer", owner_id: 1, price_a_day: 450, notes: "The camer is old so it might take a moment to load the picture" },
    { item_name: "TV", owner_id: 1, renter_id: 4, price_a_day: 150, notes: "The tv is new, don't place juicy stuff on the screen" },
    { item_name: "TV", owner_id: 1, price_a_day: 250, notes: "The tv can make loud sound be aware of it" },
    { item_name: "XBOX", owner_id: 1, price_a_day: 200, notes: "Remember to place everything back to the box" },
  ]);

};