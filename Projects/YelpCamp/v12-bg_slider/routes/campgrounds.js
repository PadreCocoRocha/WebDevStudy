// =====================================
// = CAMPGROUND ROUTES - /campgrounds ==
// =====================================

var express     = require("express"),
    Campground  = require("../models/campground"),
    middleware  = require("../middleware"); // if the export file is named index.js, 
                                            // you only have to point to the module's root folder
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
router.get('/new', middleware.isLoggedIn, function(req, res){
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
    });
});

// CREATE - Inserts a new campground in the database
router.post('/', middleware.isLoggedIn, function(req, res){
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
    });
});

// EDIT - CAMPGROUND ROUTE

router.get("/:id/edit", middleware.isCampgroundOwner, function(req, res){
    Campground.findById(req.params.id, function(e, foundCampground){
        res.render("campgrounds/edit", {camp: foundCampground});
    });
});

// UPDATE - CAMPGROUND ROUTE
router.put("/:id", function(req, res){
    console.log("this is the eddited camp: " + req.body.camp);
    Campground.findByIdAndUpdate(req.params.id, req.body.camp, function(err, camp){
        if (err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY - CAMPGROUND ROUTE
router.delete("/:id", middleware.isCampgroundOwner, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(e, camp){
        res.redirect("/campgrounds");
    });
});

module.exports = router;