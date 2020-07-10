const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('express-flash');
const hbs = require('hbs');
const expressHbs = require('express-handlebars');
const passportSocketIo = require("passport.socketio");

const app = express();
app.use(express.json());


app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'hello'

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
})
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');



app.use(mainRoutes);
app.use(userRoutes);



const uri = "mongodb+srv://storyfx:storyfx@cluster0.isjic.mongodb.net/storyfx?retryWrites=true&w=majority&readPreference=secondary&replicaSet=storyfx-shard-00-01.o3bvv.mongodb.net:27017&ssl=true";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))



app.listen(5000, () => {
  console.log('server is running on port: 3000');
});
