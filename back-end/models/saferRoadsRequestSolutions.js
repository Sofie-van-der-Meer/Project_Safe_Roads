// join table
const db = require('../db/db');

function initSaferRoadsRequestSolutionsTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS safer_roads_request_solutions (
            request_id INTEGER NOT NULL,
            solution_id INTEGER NOT NULL,
            PRIMARY KEY (request_id, solution_id),
            FOREIGN KEY (request_id) REFERENCES safer_roads_request(id),
            FOREIGN KEY (solution_id) REFERENCES fragmentation_solutions(id)
        );
    `);
}

function setSaferRoadsRequestSolutions(request_id, solution_ids, callback) {
    solution_ids.forEach(solution_id => {
        db.run('INSERT INTO safer_roads_request_solutions (request_id, solution_id) VALUES (?, ?)', 
            [request_id, solution_id], callback);
    });
}

function getSaferRoadsRequestSolutionsByRequestId(request_id, callback) {
    db.all(`
        SELECT s.*
        FROM fragmentation_solutions s
        JOIN safer_roads_request_solutions rs ON s.id = rs.solution_id
        WHERE rs.request_id = ?
    `, [request_id], callback);
}


module.exports = {
    initSaferRoadsRequestSolutionsTable,
    setSaferRoadsRequestSolutions,
    getSaferRoadsRequestSolutionsByRequestId
};