const express = require('express');
const router = express.Router();
const { getTownMailAddresses } = require('../models/townMailAddresses');

router.get('/:postcode', (req, res) => {
    const postcode = req.params.postcode;
    getTownMailAddresses(postcode, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ townMailAddress: row });
    });
});

module.exports = router;