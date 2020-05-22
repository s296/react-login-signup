const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const URL  = require('./mongourl');

mongoose.connect(URL+'user', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/",router);

app.listen(3001, () => {
    console.log('Server is on');
})
