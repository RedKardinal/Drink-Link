const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = 'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id';
  pool.query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// ---- GET ALL USERS ---- //
// GET all users from database
router.get('/all', rejectUnauthenticated, (req, res) => {
  console.log('req.user:', req.user);
  console.log('is authenticated?', req.isAuthenticated() );
  console.log('/user GET route');
  
  let queryText = 'SELECT * FROM "user" WHERE "admin" = false ORDER BY "username" ASC;';
  pool.query(queryText).then(results => {
      // res.sendStatus(200);
      res.send(results.rows)
  }).catch( error => {
      console.log('Error making GET request (Server)', error);
      res.sendStatus(500);
  })
}); // end GET all users

module.exports = router;
