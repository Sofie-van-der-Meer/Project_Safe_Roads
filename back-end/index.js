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

// Initialize and test towns model
const { initTownsTable, getAllTowns } = require('./models/towns');
initTownsTable();

getAllTowns((err, rows) => {
    console.log("Towns in DB:");
    console.table(rows);
});

const townsRouter = require('./routes/towns');

app.use('/towns', townsRouter);

// Initialize and test town mail addresses model
const { initTownMailAddressesTable, getTownMailAddresses } = require('./models/townMailAddresses');
initTownMailAddressesTable();

getTownMailAddresses(9880, (err, row) => {
    console.log("Town mail address for postcode 9880:");
    console.log(row);
});

const townMailAddressesRouter = require('./routes/townMailAddressesRouter');
app.use('/townMailAddresses', townMailAddressesRouter);



app.get('/', (req, res) => {
  res.send('Back-end server is running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});