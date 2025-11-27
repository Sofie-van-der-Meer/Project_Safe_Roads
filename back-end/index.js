const express = require('express');
const cors = require('cors');
const app = express();
// port is read from environment if provided -> fallback next to listen

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`Incoming: ${req.method} ${req.url}`);
    next();
})

app.get('/', (req, res) => {
  res.send('Back-end server is running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Initialize and test town mail addresses model
const { 
    initTownMailAddressesTable, 
    getAllTownsMailAddresses,
    getTownMailAddresses,
    getRoadOwnerId } = require('./models/townMailAddresses');
initTownMailAddressesTable();

const townMailAddressesRouter = require('./routes/townMailAddressesRouter');
app.use('/townMailAddresses', townMailAddressesRouter);

// Initialize and test fragmentation measurements model
const { 
    initFragmentationMeasurementsTable, 
    getAllFragmentationMeasurements, 
    getFragmentationMeasurementById } = require('./models/fragmentationMeasurements');

initFragmentationMeasurementsTable();

const fragmentationMeasurementsRouter = require('./routes/fragmentationMeasurementsRouter');
app.use('/fragmentationMeasurements', fragmentationMeasurementsRouter);

// Initialize and test request locations model
const { 
    initRequestLocationsTable, 
    setRequestLocation,
    getAllRequestLocations, 
    getRequestLocationById } = require('./models/requestLocations');

initRequestLocationsTable();

const requestLocationsRouter = require('./routes/requestLocationsRouter');
app.use('/requestLocations', requestLocationsRouter);

// Initialize and test fragmentation solutions model
const { 
    initFragmentationSolutionsTable, 
    getAllFragmentationSolutions, 
    getFragmentationSolutionById } = require('./models/fragmentationSolutions');

initFragmentationSolutionsTable();

const fragmentationSolutionsRouter = require('./routes/fragmentationSolutionsRouter');
app.use('/fragmentationSolutions', fragmentationSolutionsRouter);

// Initialize and test safer roads requests model
const { 
    initSaferRoadsRequestTable, 
    setSaferRoadsRequest,
    getAllSaferRoadsRequests, 
    getSaferRoadsRequestByLocationId,
    getSaferRoadsRequestWhereAllBounced } = require('./models/saferRoadsRequest');

initSaferRoadsRequestTable();

const saferRoadsRequestRouter = require('./routes/saferRoadsRequestRouter');
app.use('/saferRoadsRequests', saferRoadsRequestRouter);

// Initialize and test safer roads requests solutions model - JOIN TABLE //
const { 
    initSaferRoadsRequestSolutionsTable,
    setSaferRoadsRequestSolutions,
    getSaferRoadsRequestSolutionsByRequestId } = require('./models/saferRoadsRequestSolutions');

initSaferRoadsRequestSolutionsTable();

const saferRoadsRequestSolutionsRouter = require('./routes/saferRoadsRequestSolutionsRouter');
app.use('/saferRoadsRequestSolutions', saferRoadsRequestSolutionsRouter);

// logs
getTownMailAddresses(31022, (err, row) => {
    console.log("Town mail address for postcode 31022:");
    console.table(row);
});

getAllFragmentationMeasurements((err, rows) => {
    console.log("Fragmentation measurements in DB:");
    console.table(rows);
});