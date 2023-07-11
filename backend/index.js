//Connect to database:

const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to mongoose");
}

connectToMongo();

//Express:
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json())  //middleware

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Running successfully at http://localhost:${port}`);
})




