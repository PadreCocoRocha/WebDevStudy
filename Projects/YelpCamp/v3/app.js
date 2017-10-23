var express     = require('express'),
    app         = express(),
    ejs         = require('ejs'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");

mongoose.connect('mongodb://localhost/yelp_camp_v3');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
seedDB();

app.get('/', function(req, res){
    res.render('landing');
});

// INDEX - Show all Campgrounds
app.get('/index', function(req, res){
    Campground.find('campgrounds', function(err, camps){
        if (err) {
            console.log("Error: " + err);
            res.redirect('/');
        } else {
            res.render('index', {camps: camps});
        }
    });
});

// NEW - Show form to create a new campground
app.get('/index/new', function(req, res){
    res.render('new');
});

// SHOW - Shows more information about a specific element
app.get('/index/:id', function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
        if (err){
            console.log("Error: " + err);
            res.redirect('/index');
        } else {
            console.log("New database query for: " + foundCamp);//foundCamp.id);
            res.render('show', {camp: foundCamp});
        }
    })
});

// CREATE - Inserts a new campground in the database
app.post('/index', function(req, res){
    var url = req.body.url;
    var name = req.body.name;
    var desc = req.body.desc;
    var newCampGround = {name: name, image: url, description: desc};
    
    Campground.create(newCampGround, function(err, camp){
        if (err){
            console.log("Error: " + err);
        } else {
            console.log("Newly created campground: " + camp);
            res.redirect('/index');
        }
    })
});

app.listen(process.env.PORT, process.env.HOST, function(){
    console.log("Server running!!");
});