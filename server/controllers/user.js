const bcrypt = require("bcryptjs");
const pool = require("../db/connect");
const userController = {};

userController.createUser = async (req, res, next) => {
  // Get username and password from body of POST request
  const { username, password } = req.body;
  if (!username || !password)
    return next({
      status: 401,
      message: "Invalid username or password.",
    });

  // Create hashed version of password.
  let hashedPassword;
  try {
    const salt = bcrypt.genSaltSync(10);
    hashedPassword = bcrypt.hashSync(password, salt);
  } catch (err) {
    return next({ status: 500, message: err.message });
  }

  // Save user to PostgreSQL database, using parameterized queries.
  try {
    const params = [username, hashedPassword];
    const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;
    const { rows } = await pool.query(query, params);
    res.locals.id = rows[0].id; // Assign "ID" of created user to res.locals.id, so that our anonymous function in the router can pass it back to the user.
  } catch (err) {
    return next({
      status: 500,
      message:
        "Could not sign up user with that username and password. Do you already have an account?",
    });
  }

  // Move to the next middleware after insertion is complete.
  return next();
};

userController.signInUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return next(new Error("Need to supply username and password"));

  // Lookup user by username
  let user;
  try {
    const query = `SELECT * FROM users WHERE username=$1`;
    const params = [username];
    const { rows } = await pool.query(query, params);
    if (rows.length < 1)
      return next({
        status: 401,
        message: "That username and password is not valid.",
      });

      
    user = rows[0];
  } catch (err) {
    return next({
      status: 500,
      message: err.message,
    });
  }

  // Verify that password matches the hashed password in the DB
  const compared = await bcrypt.compare(password, user.password);
  if (!compared)
    return next({
      status: 401,
      message: "That username and password is not valid.",
    });

  // Pass user's ID to be set as cookie in next controller
  res.locals.id = user.id;

  // If username and password are valid, create cookie for user
  return next();
};

module.exports = userController;
