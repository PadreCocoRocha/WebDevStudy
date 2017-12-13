// ===============================
// == Authentication Routes - / ==
// ===============================

var express     = require("express"),
    passport    = require("passport"),
    User        = require("../models/user"),
    middleware  = require("../middleware");
var router      = express.Router();

//Landing Page
router.get('/', function(req, res){
    res.render('landing');
});

//  REGISTER ROUTES
router.get("/register", function(req, res){
   res.render("register");
});

router.post("/register", function(req, res){
   User.register(new User({username: req.body.username}), req.body.password, function(err, user){
       if (err) {
           req.flash("error", err.message);
           return res.render("register");
       }
       passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome to YelpCamp, " + user.username + "!")
           res.redirect("/campgrounds");
       });
   });
});

//  LOGIN ROUTES
router.get("/login", function(req, res){
    if (req.isAuthenticated()){
        req.flash("warning", "You are already logged in!");
        return res.redirect("/campgrounds");
    }
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}));

//  LOGOUT ROUTES
router.get("/logout", function(req, res){
    if (req.isAuthenticated()){
       req.logout();
       return res.redirect("/campgrounds");
    }
    req.flash("warning", "You are not logged in!");
    res.redirect("/campgrounds");
});

module.exports = router;