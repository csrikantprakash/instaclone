const serverApp = require('./server/serverApp');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

serverApp.listen(port, ()=>{
    console.log(`Server up and listening on ${port}`);
}) 
