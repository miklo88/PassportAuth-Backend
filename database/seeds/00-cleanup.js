exports.seed = async knex => {
  await knex("blog_posts").truncate();
  await knex("users").truncate();
};
