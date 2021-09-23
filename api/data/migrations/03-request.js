exports.up = async (knex) => {
    await knex.schema
        .createTable("requests", requests => {
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
            requests.string("notes", 200);
            requests.string("date_need_item").notNullable();
            requests.integer("how_many_days").unsigned().notNullable();
        })
}

exports.down = async (knex) => {
    await knex.schema
        .dropTableIfExists('requests')
}
