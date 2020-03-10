const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "14d"
  };
  return jwt.sign(payload, secrets.jwtSecrets, options);
}
