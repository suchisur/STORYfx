const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());



const uri = "mongodb+srv://storyfx:storyfx@cluster0.isjic.mongodb.net/storyfx?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

const usersRouter = require('./backend/routes/users');
app.use('/users', usersRouter);
  

app.listen(5000, () => {
  console.log('server is running on port: 5000');
});
