exports.up = async (knex) => {
    await knex.schema
        .createTable("items", items => {
            items.increments("item_id");
            items.string("item_name", 200).notNullable();
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
            items.string("notes", 300);
            items.string("url").defaultTo('https://picsum.photos/200/300')
        })
}

exports.down = async (knex) => {
    await knex.schema
        .dropTableIfExists('items')
}