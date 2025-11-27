// saferRoadsRequestRouter
const express = require('express');
const router = express.Router();
const { 
    setSaferRoadsRequest,
    getAllSaferRoadsRequests, 
    getSaferRoadsRequestByLocationId, 
    getSaferRoadsRequestWhereAllBounced } = require('../models/saferRoadsRequest'); 

router.post('/', (req, res) => {    
    const requestData = req.body;
    setSaferRoadsRequest(requestData, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }   
        res.status(201).json({ message: 'Safer roads request set successfully' });
    });
});

router.get('/', (req, res) => {
    getAllSaferRoadsRequests((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ saferRoadsRequests: rows });
    });
});

router.get('/', (req, res) => {
    getSaferRoadsRequestWhereAllBounced((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ saferRoadsRequestsBounced: rows });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.location_id;
    getSaferRoadsRequestByLocationId(location_id, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ saferRoadsRequest: row });
    });
});

module.exports = router;