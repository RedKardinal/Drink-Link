const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('is authenticated?', req.isAuthenticated() );
    console.log('/shelf GET route');
    let queryText = 'SELECT * FROM "item";';
    pool.query(queryText).then(results => {
        // res.sendStatus(200);
        res.send(results.rows)
    }).catch( error => {
        console.log('Error making GET request', error);
        res.sendStatus(500);
    })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    const newItem = req.body;
    const queryValues = [
        newItem.description,
        newItem.image_url,
        req.user.id
    ]
    const queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`;
    pool.query(queryText, queryValues)
    .then( () => {res.sendStatus(201);
    console.log('in POST', queryValues, req.user.id);
    })
    .catch( (error) => {
        console.log('Error in POST REQUEST', error);
        res.sendStatus(500);
    })
});
// end POST


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    console.log('is user authenticated?', req.isAuthenticated());
    console.log('in /delete route');
    let queryText = `DELETE FROM "item" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [req.params.id, req.user.id])
    .then( (results) => {
        console.log('delete successful', results);
        res.sendStatus(200);
    }).catch(error => {
        console.log('Problem with Delete request', error);
        res.sendStatus(500);
    })

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;