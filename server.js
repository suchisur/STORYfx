const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:storyfx@cluster0.isjic.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))


app.listen(5000, () => {
  console.log('server is running on port: 5000');
});
