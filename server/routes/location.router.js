const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// ---- GET LOCATION ---- //
// GET all location from database
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('is authenticated?', req.isAuthenticated() );
    console.log('/shelf GET route');
    let queryText = 'SELECT * FROM "location" ORDER BY "name" ASC;';
    pool.query(queryText).then(results => {
        // res.sendStatus(200);
        res.send(results.rows)
    }).catch( error => {
        console.log('Error making GET request (Server)', error);
        res.sendStatus(500);
    })
}); // end GET Locations

// ---- ADD LOCATION ---- //
// Add Location to the database
router.post('/', (req, res) => {
    const newLocation = req.body;
    const queryValues = [
        req.user.id,
        newLocation.name,
        newLocation.time,
        newLocation.web,
        newLocation.detail
    ]
    const queryText = `INSERT INTO "location" ("user_id", "name", "time", "detail", "URL") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, queryValues)
    .then( () => {res.sendStatus(201);
    console.log('in POST', queryValues, req.user.id);
    })
    .catch( (error) => {
        console.log('Error making POST request (Server)', error);
        res.sendStatus(500);
    })
}); // end POST locations

// ---- DELETE LOCATION ---- //
// Delete an item if it's something the logged in user added
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('is user authenticated?', req.isAuthenticated());
    console.log('in /delete route');
    let queryText = `DELETE FROM "location" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [req.params.id, req.user.id])
    .then( (results) => {
        console.log('delete successful', results);
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error making DELETE request (Server)', error);
        res.sendStatus(500);
    })
}); // end DELETE locations

// ---- APPROVE LOCATION ---- //
// Approve locations (this is a toggle)
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('is user authenticated?', req.isAuthenticated());
    let queryText = `UPDATE "location" SET "approve" = NOT "approve" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [req.params.id, req.user.id])
    .then( (results) => {
        console.log('approve successful', results);
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error making APPROVE request (Server)', error);
        res.sendStatus(500);
    })
}); // end APPROVE locations


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;