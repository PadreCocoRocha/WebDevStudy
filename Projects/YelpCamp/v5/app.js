var express     = require('express'),
    app         = express(),
    ejs         = require('ejs'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");

mongoose.connect('mongodb://localhost/yelp_camp_v5');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
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
            res.render('campgrounds/index', {camps: camps});
        }
    });
});

// NEW - Show form to create a new campground
app.get('/index/new', function(req, res){
    res.render('campgrounds/new');
});

// SHOW - Shows more information about a specific element
app.get('/index/:id', function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
        if (err){
            console.log("Error: " + err);
            res.redirect('/index');
        } else {
            console.log("New database query for: " + foundCamp);//foundCamp.id);
            res.render('campgrounds/show', {camp: foundCamp});
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

// ==================
// Comments Routes
// ==================

app.get("/index/:id/comments/new", function(req, res){
    Campground.findById(req.params.id, function(err, foundCamp){
       if (err) {
           console.log(err);
           res.redirect("/index/:" + req.params.id);
       } else {
           res.render("comments/new", {camp: foundCamp});
       }
    });
});

app.post("/index/:id/comments", function(req, res){
    Campground.findById(req.params.id, function(err, foundCamp){
       if (err) {
           console.log(err);
           res.redirect("/index/:" + req.params.id);
       } else {
           Comment.create(req.body.comment, function(err, commentCreated){
                if (err) {
                    console.log(err);
                    res.redirect("/index/:" + req.params.id);
                } else {
                    // at this point, req.params.comment and commentCreated are the same data
                    // but what will actually be pushed into foundCamp.comments is 
                    // the comment's ObjectId (it is still a reference)
                    console.log("This is the created comment: " + commentCreated);
                    foundCamp.comments.push(commentCreated);
                    foundCamp.save();
                    res.redirect("/index/" + foundCamp._id);  
                }
           });
       }
    });
});

app.listen(process.env.PORT, process.env.HOST, function(){
    console.log("Server running!!");
});