var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
var app = express();
const session = require('express-session');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'fasdfsad',
    resave: false,
    saveUninitialized: false
}));
require("./database/database-setting");
require("./config/passport.local");
require("./route")(app);

module.exports = app;
