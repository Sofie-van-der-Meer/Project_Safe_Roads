const db = require('../db/db');

function initTownsTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS towns (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
        
    `);
}

function getAllTowns(callback) {
    db.all('SELECT * FROM towns', callback);
}

module.exports = {
    initTownsTable,
    getAllTowns
};