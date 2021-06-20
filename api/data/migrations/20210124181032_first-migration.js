exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", roles => {
      roles.increments("role_id");
      roles.string("role_name").notNullable().unique();
    })
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('username', 128).notNullable().unique();
      users.string('password', 128).notNullable();
      users.string('email', 128).notNullable();
      users.string('profile_image',200).defaultTo("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png");
      users.string("name", 128).defaultTo("tech");
      users.integer("role_id")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
    .createTable("items", items=>{
      items.increments("item_id");
      items.string("item_name",200).notNullable();
      items.integer("owner_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      items.integer("renter_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      items.decimal("price_a_day")
        .unsigned()
        .notNullable();
      items.string("notes",300);
    })
    .createTable("requests",requests =>{
      requests.increments("request_id");
      requests.integer("item_id")
        .unsigned()
        .notNullable()
        .references("item_id")
        .inTable("items")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      requests.integer("renter_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      requests.string("notes",200);
      requests.string("date_need_item").notNullable();
      requests.integer("how_many_days").unsigned().notNullable();
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('requests')
  .dropTableIfExists('items')
  .dropTableIfExists('users')
  .dropTableIfExists('roles')
}
