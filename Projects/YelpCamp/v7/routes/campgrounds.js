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
router.get('/new', function(req, res){
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
router.post('/', function(req, res){
    var url = req.body.url;
    var name = req.body.name;
    var desc = req.body.desc;
    var newCampGround = {name: name, image: url, description: desc};
    
    Campground.create(newCampGround, function(err, camp){
        if (err){
            console.log("Error: " + err);
        } else {
            console.log("Newly created campground: " + camp);
            res.redirect('/campgrounds');
        }
    })
});

module.exports = router;