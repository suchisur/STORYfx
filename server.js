const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

require('dotenv').config();

mongoose.connect( process.env.ATLAS_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',() => {
    console.log(`MongoDB database connection established`);
});


app.listen(process.env.PORT, () =>{
    console.log(`server is running on port: ${process.env.PORT}`);
});
