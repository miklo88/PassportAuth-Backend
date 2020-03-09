exports.up = async function(knex) {
  await knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("firstname");
    table.string("lastname");
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.varchar("user_photo").notNullable();
    table.bigint("phone_number").notNullable();
    table.string("bio");
    table
      .boolean("Completed")
      .notNullable()
      .defaultTo(false);
  });
  await knex.schema.createTable("blog_posts", table => {
    table.increments("id");
    table
      .integer("users_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.varchar("img_input");
    table.varchar("url_input");
    table.string("title_description").notNullable();
    table
      .boolean("Completed")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = async function(knex) {
  åååå;
  await knex.schema.dropTableIfExists("blog_posts");
  await knex.schema.dropTableIfExists("users");
};
