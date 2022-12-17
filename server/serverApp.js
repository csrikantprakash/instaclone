const express = require('express');
const serverApp = express();
const cors = require('cors');
const routes = require('./routes/route.js');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
serverApp.use(cors(corsOptions));

serverApp.use(express.json({limit:'50mb'}));
serverApp.use(express.urlencoded({limit:"50mb", extended:true}));

serverApp.use('/', routes);
module.exports = serverApp;