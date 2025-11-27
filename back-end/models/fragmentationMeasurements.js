// FragmentationMeasurements
const db = require('../db/db');
const seedData = require('../seed/fragmentationMeasurements.json');

function initFragmentationMeasurementsTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS fragmentation_measurements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            longitude INTEGER NOT NULL,
            latitude INTEGER NOT NULL,
            type TEXT NOT NULL
        );
    `);

    db.get(`SELECT COUNT(*) AS count FROM fragmentation_measurements`, (err, row) => {
        if (err) {
            console.error("Error checking fragmentation_measurements table:", err);
            return;
        }
        if (!row) {
            console.error("No row returned when checking fragmentation_measurements table.");
            return;
        }
        if (row.count === 0) {
            const insert = db.prepare(`
                INSERT INTO fragmentation_measurements (longitude, latitude, type)
                VALUES (?, ?, ?)
            `);

            seedData.forEach(entry => insert.run(...entry));
            insert.finalize();
        }
    });
}

function getAllFragmentationMeasurements(callback) {
    db.all('SELECT * FROM fragmentation_measurements', callback);
}

function getFragmentationMeasurementById(id, callback) {
    db.get('SELECT * FROM fragmentation_measurements WHERE id = ?', [id], callback);
}

module.exports = {
    initFragmentationMeasurementsTable,
    getAllFragmentationMeasurements,
    getFragmentationMeasurementById
};