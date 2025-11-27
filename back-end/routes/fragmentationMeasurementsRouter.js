// FragmentationMeasurementsRouter
const express = require('express');
const router = express.Router();
const { getAllFragmentationMeasurements, getFragmentationMeasurementById } = require('../models/fragmentationMeasurements');

router.get('/', (req, res) => {
    getAllFragmentationMeasurements((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ fragmentationMeasurements: rows });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    getFragmentationMeasurementById(id, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ fragmentationMeasurement: row });
    });
});

module.exports = router;