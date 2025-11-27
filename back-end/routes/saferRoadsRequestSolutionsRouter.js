const express = require('express');
const router = express.Router();

const { 
    setSaferRoadsRequestSolutions,
    getSaferRoadsRequestSolutionsByRequestId } = 
    require('../models/saferRoadsRequestSolutions');

router.post('/', (req, res) => {
    const { request_id, solution_ids } = req.body;
    setSaferRoadsRequestSolutions(request_id, solution_ids, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }   
        res.status(201).json({ message: 'Safer roads request solutions set successfully' });
    });
});

router.get('/:requist_id', (req, res) => {
    const id = req.params.id;
    getSaferRoadsRequestSolutionsByRequestId(id, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ fragmentationSolutions: rows });
    });
});

module.exports = router;