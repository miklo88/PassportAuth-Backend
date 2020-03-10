exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstname: "Carl",
          lastname: "Redding",
          username: "Carlitos_",
          email: "email@email.com",
          password: "testpassword",
          user_photo: "filler for meow1",
          phone_number: "123.123.1232",
          bio: "Chicago livin."
        },
        {
          id: 2,
          firstname: "Michelle",
          lastname: "Obama",
          username: "Classy",
          email: "email@michelle.com",
          password: "testpassword",
          user_photo: "filler for meow2",
          phone_number: "123.123.1232",
          bio:
            "I'm a living example of hope amongst what is currently in the white house."
        },
        {
          id: 3,
          firstname: "Snopp",
          lastname: "Dogg",
          username: "Snopp Doggy-Dogg",
          email: "email@snoopdogg.com",
          password: "testpassword",
          user_photo: "filler for meow3",
          phone_number: "123.123.1232",
          bio: "Cannabis Enthusiast!"
        }
      ]);
    });
};
