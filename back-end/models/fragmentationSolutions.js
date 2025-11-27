const db = require('../db/db');

function initFragmentationSolutionsTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS fragmentation_solutions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            used_by TEXT
        );
    `);
}

function getAllFragmentationSolutions(callback) {
    db.all('SELECT * FROM fragmentation_solutions', callback);
}

function getFragmentationSolutionById(id, callback) {
    db.get('SELECT * FROM fragmentation_solutions WHERE id = ?', [id], callback);
}


module.exports = {
    initFragmentationSolutionsTable,
    getAllFragmentationSolutions,
    getFragmentationSolutionById
};