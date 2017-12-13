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
            console.log(err);
            return res.render("register");
       }
       passport.authenticate("local")(req, res, function(){
          res.redirect("/campgrounds");
       });
   });
});

//  LOGIN ROUTES
router.get("/login", function(req, res){
   res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}));

//  LOGOUT ROUTES
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/campgrounds");
});

module.exports = router;