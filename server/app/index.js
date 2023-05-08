const express = require('express');
const app = express();
const cors = require("cors");
const { notFoundErr, customErrorHandler } = require('../middlewares/ErrorHandler');
const dbConnection = require('../config/dbConnection');
const userRoutes = require('../routes/userRoutes');

// default configuration
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// dbConnection
dbConnection()
//=========routes========
let mainRoute = "/api/v1"
app.use(mainRoute+"/auth",userRoutes)


//=========middleware========

// error handlers
app.use(notFoundErr)
app.use(customErrorHandler)


module.exports = app;