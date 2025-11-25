const express = require('express');
const cors = require('cors');
const app = express();
// port is read from environment if provided -> fallback next to listen

app.use(express.json());
app.use(cors());

const { initTownsTable, getAllTowns } = require('./models/towns');
initTownsTable();

getAllTowns((err, rows) => {
    console.log("Towns in DB:");
    console.table(rows);
});

const townsRouter = require('./routes/towns');

app.use('/towns', townsRouter);

app.get('/', (req, res) => {
  res.send('Back-end server is running');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});