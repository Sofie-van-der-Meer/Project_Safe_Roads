const db = require('../db/db');

function initRequestLocationsTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS request_locations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            streetname TEXT NOT NULL,
            town TEXT NOT NULL,
            latutide INTEGER NOT NULL,
            longitude INTEGER NOT NULL
        );
    `);
}

function setRequestLocation(streetname, town, latitude, longitude, callback) {
    db.run('INSERT INTO request_locations (streetname, town, latutide, longitude) VALUES (?, ?, ?, ?)', 
        [streetname, town, latitude, longitude], 
        function(err) {
            if (err) return callback(err);
            callback(null, this.lastID);
        });
}

function getAllRequestLocations(callback) {
    db.all('SELECT * FROM request_locations', callback);
}

function getRequestLocationById(id, callback) {
    db.get('SELECT * FROM request_locations WHERE id = ?', [id], callback);
}


module.exports = {
    initRequestLocationsTable,
    setRequestLocation,
    getAllRequestLocations,
    getRequestLocationById
};