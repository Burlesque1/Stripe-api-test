const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // authentication flow 

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize()); // enable cookies
app.use(passport.session());    // alter req and deserialize user

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
