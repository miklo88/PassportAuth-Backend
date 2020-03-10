//validateMiddlware for login/register
function validateMiddlware(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    res.satus(401).json({ error: "Invalid credentials for login" });
  } else {
    next();
  }
}

module.exports = { validateMiddlware };
