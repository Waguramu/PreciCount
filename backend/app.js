let Config = require('./config/config.js');

/**
 * DB connect
 */
var mongoose = require('mongoose');

console.log("Connecting to database: " + Config.db.url + " (" + Config.db.user + ", " + Config.db.pass + ")");
mongoose.connect(Config.db.url, {
    useNewUrlParser: true
}).then(
    () => console.log("Connection to database succeeded."),
    (err) => console.log("Connection to database has failed: " + err)
);

/**
 * Create application
 */
let express = require('express');
let bodyParser = require('body-parser');
let busboy = require('express-busboy');
let cors = require('cors');
let app = express();

/**
 * App setup
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
busboy.extend(app, {
    upload: true,
});

/**
 * Passport
 */
let passport = require('passport');
let jwtConfig = require('./passport/jwtConfig');
app.use(passport.initialize());
jwtConfig(passport);

/**
 * Routing
 */
let userRoutes = require("./user/userRoutes");
let collectionRoutes = require("./collection/collectionRoutes");
let documentRoutes = require("./document/documentRoutes");
let countRoutes = require("./models/countRoutes");
let classifyRoutes = require("./models/classifyRoutes");

app.use('/api/user', userRoutes(passport));
app.use('/api/collection', collectionRoutes(passport));
app.use('/api/document', documentRoutes(passport));
app.use('/api/infercount', countRoutes(passport));
app.use('/api/infertype', classifyRoutes(passport));

module.exports = app;
