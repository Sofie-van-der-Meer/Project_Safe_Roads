// saferRoadsRequest 
const db = require('../db/db');
const { setRequestLocation } = require('./requestLocations');
const { getRoadOwnerId } = require('./townMailAddresses');
const { setSaferRoadsRequestSolutions } = require('./saferRoadsRequestSolutions');

function initSaferRoadsRequestTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS safer_roads_request (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            request_date TEXT NOT NULL,
            requester_name TEXT NOT NULL,
            requester_email TEXT NOT NULL,
            requester_stays_anonymous INTEGER DEFAULT 0,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            road_owner_id INTEGER,
            mail_list TEXT,
            all_bounced INTEGER DEFAULT 0,
            location_id INTEGER UNIQUE,
            FOREIGN KEY (road_owner_id) REFERENCES town_mail_addresses(id),
            FOREIGN KEY (location_id) REFERENCES request_locations(id)
        );
    `);
}

function setSaferRoadsRequest(requestData, callback) {
    let location_id, road_owner_id, request_id;

    setRequestLocation(
        requestData.streetname, 
        requestData.town, 
        requestData.latitude, 
        requestData.longitude, 
        function (err, id) {
            if (err) return callback(err);
            if (!id) return callback(new Error("Failed to set request location."));
            else location_id = id;
        }
    );

    getRoadOwnerId(requestData.nis_code, function (err, row) {
        if (err) return callback(err);
        if (!row) return callback(new Error("No road owner found for given nis_code."));
        else road_owner_id = row.id;
    });

    db.run(`
        INSERT INTO safer_roads_request (
        request_date, requester_name, requester_email, requester_stays_anonymous, 
        subject, message, mail_list, all_bounced, location_id, road_owner_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            requestData.request_date,
            requestData.requester_name,
            requestData.requester_email,
            requestData.requester_stays_anonymous ? 1 : 0,
            requestData.subject,
            requestData.message,
            requestData.mail_list,
            requestData.all_bounced ? 1 : 0,
            location_id,
            road_owner_id
        ], function (err, id) {
            if (err) return callback(err);
            request_id = id;
        }
    );

    setSaferRoadsRequestSolutions(request_id, requestData.solution_ids, callback)
}

function getAllSaferRoadsRequests(callback) {
    db.all(`
        SELECT 
            req.id,
            req.request_date,
            req.requester_name,
            req.requester_email,
            req.requester_stays_anonymous,
            req.subject,
            req.message,
            req.mail_list,
            req.all_bounced,

            loc.id AS location_id,
            loc.streetname AS location_streetname,
            loc.town AS location_town,
            loc.latitude AS location_latitude,
            loc.longitude AS location_longitude,

            strOwner.id AS road_owner_id,
            strOwner.nis_code AS road_owner_nis_code,
            strOwner.generalMailName AS road_owner_generalMailName,
            strOwner.depEnvironmentMailName AS road_owner_depEnvironmentMailName,
            strOwner.mailDomain AS road_owner_mailDomain,

            GROUP_CONCAT(reqSol.solution_id) AS solution_ids,
            GROUP_CONCAT(sol.name) AS solution_names

        FROM safer_roads_request req
        LEFT JOIN request_locations loc
            ON req.location_id = loc.id
        LEFT JOIN town_mail_addresses strOwner
            ON req.road_owner_id = strOwner.id
        LEFT JOIN safer_roads_request_solutions reqSol
            ON req.id = reqSol.request_id
        LEFT JOIN fragmentation_solutions sol
            ON sol.id = reqSol.solution_id

        GROUP BY req.id
    `, callback);
}

function getSaferRoadsRequestByLocationId(location_id, callback) {
    db.get(`
        SELECT 
            req.id,
            req.request_date,
            req.requester_name,
            req.requester_email,
            req.requester_stays_anonymous,
            req.subject,
            req.message,
            req.mail_list,
            req.all_bounced,

            loc.id AS location_id,
            loc.streetname AS location_streetname,
            loc.town AS location_town,
            loc.latitude AS location_latitude,
            loc.longitude AS location_longitude,

            strOwner.id AS road_owner_id,
            strOwner.nis_code AS road_owner_nis_code,
            strOwner.generalMailName AS road_owner_generalMailName,
            strOwner.depEnvironmentMailName AS road_owner_depEnvironmentMailName,
            strOwner.mailDomain AS road_owner_mailDomain,

            GROUP_CONCAT(reqSol.solution_id) AS solution_ids,
            GROUP_CONCAT(sol.name) AS solution_names

        FROM safer_roads_request req
        LEFT JOIN request_locations loc
            ON req.location_id = loc.id
        LEFT JOIN town_mail_addresses strOwner
            ON req.road_owner_id = strOwner.id
        LEFT JOIN safer_roads_request_solutions reqSol
            ON req.id = reqSol.request_id
        LEFT JOIN fragmentation_solutions sol
            ON sol.id = reqSol.solution_id

        WHERE req.location_id = ?

        GROUP BY req.id
    `, [location_id], callback);
}

function getSaferRoadsRequestWhereAllBounced(callback) {
    db.all(`
        SELECT 
            req.id,
            req.request_date,
            req.requester_name,
            req.requester_email,
            req.requester_stays_anonymous,
            req.subject,
            req.message,
            req.mail_list,
            req.all_bounced,

            loc.id AS location_id,
            loc.streetname AS location_streetname,
            loc.town AS location_town,
            loc.latitude AS location_latitude,
            loc.longitude AS location_longitude,

            strOwner.id AS road_owner_id,
            strOwner.nis_code AS road_owner_nis_code,
            strOwner.generalMailName AS road_owner_generalMailName,
            strOwner.depEnvironmentMailName AS road_owner_depEnvironmentMailName,
            strOwner.mailDomain AS road_owner_mailDomain,

            GROUP_CONCAT(reqSol.solution_id) AS solution_ids,
            GROUP_CONCAT(sol.name) AS solution_names

        FROM safer_roads_request req
        LEFT JOIN request_locations loc
            ON req.location_id = loc.id
        LEFT JOIN town_mail_addresses strOwner
            ON req.road_owner_id = strOwner.id
        LEFT JOIN safer_roads_request_solutions reqSol
            ON req.id = reqSol.request_id
        LEFT JOIN fragmentation_solutions sol
            ON sol.id = reqSol.solution_id

        WHERE req.all_bounced = 1

        GROUP BY req.id
        `, callback);
}

module.exports = {
    initSaferRoadsRequestTable,
    setSaferRoadsRequest,
    getAllSaferRoadsRequests,
    getSaferRoadsRequestByLocationId,
    getSaferRoadsRequestWhereAllBounced
};