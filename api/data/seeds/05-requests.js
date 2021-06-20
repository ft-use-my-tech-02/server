exports.seed = function (knex, Promise) {
    return knex('requests').insert([
      { item_id: 1, renter_id: 2, notes:"I want to take a photo with my dad", date_need_item:"6-21-2021", how_many_days: 2},
      { item_id: 1, renter_id: 4, notes:"I want to take a photo with my girlfriend", date_need_item:"6-23-2021", how_many_days: 7},
    ]);
  };