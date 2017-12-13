var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    localStrategy            = require("passport-local"),
    passportLocalMessage    = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "EtaLere", // this is used to enconde/decode information on sessions
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==============
//    Routes
//==============

app.get("/register", function(req, res){
   res.render("register");
});

app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
                return res.send("register");
        } else {
            passport.authenticate("local")(req, res, function(){
               res.redirect("/secret");
            });
        }
    });
    res.send("register post route");
});

app.get("/", function(req, res){
   res.render("home");
});
app.get("/secret", isLoggedIn, function(req, res){
   res.render("secret");
});


// Login Routes
app.get("/login", function(rea, res){
   res.render("login");
});

app.post("/login", passport.authenticate("local", { // this is a middleware,
    successRedirect: "/secret",                     // a function that runs before the callback
    failureRedirect: "/login"                       // and after the route being triggered
}), function(req, res){

});

// Logout Routes
app.get("/logout", function(req, res){
   req.logout(); // Destroy user data fro this session
   res.redirect("/");
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!");
});
