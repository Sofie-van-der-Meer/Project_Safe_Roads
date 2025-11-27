const express = require('express');
const router = express.Router();
const { getTownMailAddresses } = require('../models/townMailAddresses');

router.get('/:nis_code', (req, res) => {
    const nis_code = req.params.nis_code;
    getTownMailAddresses(nis_code, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ townMailAddress: row });
    });
});

router.get('/', (req, res) => {
    const { getAllTownsMailAddresses } = require('../models/townMailAddresses');
    getAllTownsMailAddresses((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }   
        res.json({ townMailAddresses: rows });
    });
});

module.exports = router;