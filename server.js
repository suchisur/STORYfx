const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

require('dotenv').config();

const uri = “mongodb+srv:root:storyfx@cluster0.isjic.mongodb.net/User?retryWrites=true&w=majority“;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(‘MongoDB Connected…’)
})
.catch(err => console.log(err))

app.listen(process.env.PORT, () =>{
    console.log(`server is running on port: ${process.env.PORT}`);
});
