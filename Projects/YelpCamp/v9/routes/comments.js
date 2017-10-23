// =================================================
// == Comments Routes - /campgrounds/:id/comments ==
// =================================================

var express = require("express"),
    Campground = require("../models/campground"),
    Comment = require("../models/comment");
var router = express.Router({mergeParams: true});

router.get("/new", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, foundCamp){
       if (err) {
           console.log(err);
           res.redirect("/campgrounds/:" + req.params.id);
       } else {
           res.render("comments/new", {camp: foundCamp});
       }
    });
});

router.post("/", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, foundCamp){
       if (err) {
           console.log(err);
           res.redirect("/campgrounds/:" + req.params.id);
       } else {
           Comment.create(req.body.comment, function(err, commentCreated){
                if (err) {
                    console.log(err);
                    res.redirect("/:" + req.params.id);
                } else {
                    // at this point, req.params.comment and commentCreated are the same data
                    // but what will actually be pushed into foundCamp.comments is 
                    // the comment's ObjectId (it is still a reference)
                    // console.log("This is the created comment: " + commentCreated);
                    commentCreated.author.id = req.user._id;
                    commentCreated.author.username = req.user.username;
                    commentCreated.save();
                    foundCamp.comments.push(commentCreated);
                    foundCamp.save();
                    res.redirect("/campgrounds/" + foundCamp._id);  
                }
           });
       }
    });
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;