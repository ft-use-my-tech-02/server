exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('username', 128).notNullable().unique();
      users.string('password', 128).notNullable();
      users.string('email', 128).notNullable();
      users.string('profile_image', 200).defaultTo("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png");
      users.string("name", 128).notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users')
}
