const express = require('express');
const router = express.Router();
const { getAllFragmentationSolutions, 
    getFragmentationSolutionById } = require('../models/fragmentationSolutions');

router.get('/', (req, res) => {
    getAllFragmentationSolutions((err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ fragmentationSolutions: rows });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    getFragmentationSolutionById(id, (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ fragmentationSolution: row });
    });
});

module.exports = router;