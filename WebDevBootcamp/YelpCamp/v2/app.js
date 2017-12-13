var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelpcamp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

var CampSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model('campgrounds', CampSchema);

// INDEX - Show all Campgrounds
app.get('/index', function(req, res){
    Campground.find('campgrounds', function(err, camps){
        if (err) {
            console.log("Error: " + err);
        } else {
            res.render('index', {camps: camps});
        }
    });
});

// NEW - Show form to create a new campground
app.get('/index/new', function(req, res){
    res.render('new');
});

// SHOW - Shows a specific element
app.get('/index/:id', function(req, res){
    Campground.findById(req.params.id, function(err, camp){
        if (err){
            console.log("Error: " + err);
        } else {
            console.log("New database query for: " + camp.id);
            res.render('show', {camp: camp});
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