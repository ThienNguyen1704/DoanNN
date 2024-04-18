const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require('mongoose');
const path = require('path')
const userRouter = require('./routes/user')

mongoose.connect('mongodb://127.0.0.1:27017/doansp').then(() => {
    console.log('connected')
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
app.use('/', express.static(path.join(__dirname, 'public/html')))
app.use(userRouter)

app.listen(8000, () => {
    console.log("Server is running...");
});