exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("blog_posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("blog_posts").insert([
        {
          id: 1,
          img_input: "image filler",
          url_input: "url filler",
          title_description: "a lil description fillsies for the time being."
        },
        {
          id: 2,
          img_input: "image filler",
          url_input: "url filler",
          title_description: "a lil description fillsies for the time being."
        },
        {
          id: 3,
          img_input: "image filler",
          url_input: "url filler",
          title_description: "a lil description fillsies for the time being."
        }
      ]);
    });
};
