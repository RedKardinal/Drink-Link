const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// ---- GET LOCATION ---- //
// GET all location from database
router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log('req.user:', req.user);
    // console.log('is authenticated?', req.isAuthenticated());
    // console.log('/shelf GET route');
    let queryText = 'SELECT * FROM "location" ORDER BY "name" ASC;';
    pool.query(queryText).then(results => {
        // res.sendStatus(200);
        res.send(results.rows)
    }).catch(error => {
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
        newLocation.detail,
        newLocation.URL,
        newLocation.lat,
        newLocation.lng
    ]
    const queryText = `INSERT INTO "location" ("user_id", "name", "time", "detail", "URL", "lat", "lng") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
            console.log('in POST', queryValues, req.user.id);
        })
        .catch((error) => {
            console.log('Error making POST request (Server)', error);
            res.sendStatus(500);
        })
}); // end POST locations

// ---- DELETE LOCATION ---- //
// Delete an item if it's something the logged in user added
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.admin) {
        // console.log('req.user:', req.user.admin);
        // console.log('is user authenticated?', req.isAuthenticated());
        // console.log('in /delete route');
        let queryText = `DELETE FROM "location" WHERE "id" = $1;`;
        pool.query(queryText, [req.params.id])
            .then((results) => {
                console.log('delete successful', results);
                res.sendStatus(200);
            }).catch(error => {
                console.log('Error making DELETE request (Server)', error);
                res.sendStatus(500);
            })
    }
    else {
        res.sendStatus(403)
    }
}); // end DELETE locations

// ---- APPROVE LOCATION ---- //
// Approve locations (this is a toggle)
router.put('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.admin) {
        // console.log('req.user:', req.user.admin);
        // console.log('is user authenticated?', req.isAuthenticated());
        let queryText = `UPDATE "location" SET "approve" = NOT "approve" WHERE "id" = $1;`;
        pool.query(queryText, [req.params.id])
            .then((results) => {
                console.log('approve successful', results);
                res.sendStatus(200);
            }).catch(error => {
                console.log('Error making APPROVE request (Server)', error);
                res.sendStatus(500);
            })
    }
    else {
        res.sendStatus(403)
    }
}); // end APPROVE locations

// ---- GET LOCATION ID ---- //
// GET location ID from database
router.get('/:id', rejectUnauthenticated, (req, res) => {
    // console.log('req.user:', req.user);
    // console.log('is authenticated?', req.isAuthenticated());
    // console.log('/locationIdEdit GET route');
    let queryText = 'SELECT * FROM "location" WHERE "location".id = $1;';
    pool.query(queryText, [req.params.id]).then(results => {
        // res.sendStatus(200);
        res.send(results.rows)
    }).catch(error => {
        console.log('Error making GET Location ID request (Server)', error);
        res.sendStatus(500);
    })
}); // end GET Locations

// ---- UPDATE LOCATION INFO ---- //
// Update details about each location
router.put('/', rejectUnauthenticated, (req, res) => {
    if (req.user.admin) {
        // console.log('req.user:', req.user);
        // console.log(req.params.id);
        // console.log(req, res);
        // console.log('is user authenticated?', req.isAuthenticated());
        const queryText = `UPDATE "location" SET "name" = $1, "time" = $2, "detail" = $3, "URL" = $4, "lat" = $5, "lng" = $6 WHERE "id" = $7;`
        console.log('req.body', req.body);
        pool.query(queryText, [req.body.name, req.body.time, req.body.detail, req.body.URL, req.body.lat, req.body.lng, req.body.id])
            .then((results) => {
                console.log('Location update successful', results);
                res.sendStatus(200);
            }).catch(error => {
                console.log('Error making UPDATE request (Server)', error);
                res.sendStatus(500);
            })
    }
    else {
        res.sendStatus(403)
    }
}); // end updateLocationDetails

module.exports = router;