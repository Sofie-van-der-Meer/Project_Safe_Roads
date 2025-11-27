const express = require('express');
const router = express.Router();

const { setRequestLocation, getAllRequestLocations, getRequestLocationById} = require('../models/requestLocations');

router.post('/', (req, res) => {    
    const { streetname, town, latitude, longitude } = req.body;
    setRequestLocation(streetname, town, latitude, longitude, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Request location set successfully' });
    });
});

router.get('/', (req, res) => {
    getAllRequestLocations((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ requestLocations: rows });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    getRequestLocationById(id, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ requestLocation: row });
    });
});

module.exports = router;