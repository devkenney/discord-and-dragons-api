///////////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////////

require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;

///////////////////////////////////////////////////////////////////
// MIDDLEWARE
///////////////////////////////////////////////////////////////////

app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());

///////////////////////////////////////////////////////////////////
// MONGO CONNECTION
///////////////////////////////////////////////////////////////////

mongoose.connect(mongoURI,
  {useNewUrlParser: true, useUnifiedTopology: true
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('connection made!');
})

///////////////////////////////////////////////////////////////////
// THE MEAT OF IT
///////////////////////////////////////////////////////////////////

const groupsController = require('./controllers/groups.js');
app.use('/groups', groupsController);

const sheetsController = require('./controllers/sheets.js');
app.use('/sheets', sheetsController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
