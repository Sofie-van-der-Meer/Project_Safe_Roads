const express = require('express');
const router = express.Router();
const { getAllTowns } = require('../models/towns');

router.get('/', (req, res) => {
    getAllTowns((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ towns: rows });
    });
});

module.exports = router;