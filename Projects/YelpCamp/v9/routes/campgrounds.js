// =====================================
// = CAMPGROUND ROUTES - /campgrounds ==
// =====================================

var express     = require("express"),
    Campground  = require("../models/campground");
var router      = express.Router();

// INDEX - Show all Campgrounds
router.get('/', function(req, res){
    Campground.find('campgrounds', function(err, camps){
        if (err) {
            console.log("Error: " + err);
            res.redirect('/');  
        } else {
            res.render('campgrounds/index', {camps: camps});
        }
    });
});

// NEW - Show form to create a new campground
router.get('/new', isLoggedIn, function(req, res){
    res.render('campgrounds/new');
});

// SHOW - Shows more information about a specific element
router.get('/:id', function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
        if (err){
            console.log("Error: " + err);
            res.redirect('/campgrounds');
        } else {
            console.log("New database query for: " + foundCamp);//foundCamp._id);
            res.render('campgrounds/show', {camp: foundCamp});
        }
    })
});

// CREATE - Inserts a new campground in the database
router.post('/', isLoggedIn, function(req, res){
    var newCampGround = {
        author: {
            id: req.user._id,
            username: req.user.username
        },
        name: req.body.name, 
        image: req.body.url, 
        description: req.body.desc
    };
    
    Campground.create(newCampGround, function(err, camp){
        if (err){
            console.log("Error: " + err);
        } else {
            console.log("Newly created campground: " + camp);
            res.redirect('/campgrounds');
        }
    })
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;