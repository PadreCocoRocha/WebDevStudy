// Import Modules
var express             = require('express'),
    app                 = express(),
    ejs                 = require('ejs'),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose'),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    methodOverride      = require("method-override"),
    flash               = require("connect-flash");
//Import Routes
var commentsRoutes      = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");
// Import Models
var User                = require("./models/user");
// Import Methods
var seedDB              = require("./seeds");

// Connect to mongoose DB
mongoose.connect('mongodb://localhost/yelp_camp_v11');
// Setup bodyParser to parse request.body data
app.use(bodyParser.urlencoded({extended: true}));
// Serve also the 'public' folder for the user (contains CSS and JS scripts)
app.use(express.static(__dirname + "/public"));
// Setup view engine as ejs so we dont have to write .ejs extension, eg.: render('page.ejs')
app.set('view engine', 'ejs');
// Initialize connect-flash
app.use(flash());
// Config method-override
app.use(methodOverride("_method"));
// Call seedDB method to populate the DB with some predefined data
// seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This sentence is used in the cryptography shit",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize()); // required for 
app.use(passport.session());        // passport use 
passport.use(new LocalStrategy(User.authenticate())); // Setup authentication strategy
passport.serializeUser(User.serializeUser());       // Setup enconding
passport.deserializeUser(User.deserializeUser());   // Setud decoding

// This creates the currentUser variable in every route using a <middleware>
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.msg_err = req.flash("error");
   res.locals.msg_suc = req.flash("success");
   res.locals.msg_wrn = req.flash("warning");
   next();
});

// Import Routes from the Routes folder
app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentsRoutes);

// Start the server
app.listen(process.env.PORT, process.env.HOST, function(){
    console.log("Server running!!");
});