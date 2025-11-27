const db = require('../db/db');
const seedData = require('../seed/townMailAddresses.json');

function initTownMailAddressesTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS town_mail_addresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nis_code INTEGER NOT NULL,
            generalMailName TEXT NOT NULL,
            depEnvironmentMailName TEXT,
            mailDomain TEXT NOT NULL
        );
    `);

    db.get(`SELECT COUNT(*) AS count FROM town_mail_addresses`, (err, row) => {
        if (err) {
            console.error("Error checking town_mail_addresses table:", err.message);
            return;
        }
        if (!row) {
            console.error("No row returned when checking town_mail_addresses table.");
            return;
        }
        if (row.count === 0) {
            const insert = db.prepare(`
                INSERT INTO town_mail_addresses (nis_code, generalMailName, depEnvironmentMailName, mailDomain)
                VALUES (?, ?, ?, ?)
            `);

            seedData.forEach(entry => insert.run(...entry));
            insert.finalize();
        }
    })
}

function getAllTownsMailAddresses(callback) {
    db.all('SELECT * FROM town_mail_addresses', callback);
}

function getTownMailAddresses(nis_code, callback) {
    db.get('SELECT * FROM town_mail_addresses WHERE nis_code = ?', [nis_code], callback);
}

function getRoadOwnerId(nis_code, callback) {
    db.get('SELECT id FROM town_mail_addresses WHERE nis_code = ?', [nis_code], callback);
}

module.exports = {
    initTownMailAddressesTable,
    getAllTownsMailAddresses,
    getTownMailAddresses,
    getRoadOwnerId
}