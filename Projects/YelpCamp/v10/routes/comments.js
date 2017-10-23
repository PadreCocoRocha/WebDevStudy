// =================================================
// == Comments Routes - /campgrounds/:id/comments ==
// =================================================

var express = require("express"),
    Campground = require("../models/campground"),
    Comment = require("../models/comment"),
    middleware  = require("../middleware");
var router = express.Router({mergeParams: true});

// COMMENTS - SHOW ROUTE
router.get("/new", middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, foundCamp){
       if (err) {
           console.log(err);
           res.redirect("/campgrounds/:" + req.params.id);
       } else {
           res.render("comments/new", {camp: foundCamp});
       }
    });
});

// COMMENTS - CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req, res){
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

// COMMENTS - EDIT ROUTE
router.get("/:comment_id/edit", middleware.isCommentOnwer, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if (err){
            res.redirect("back");
        } else {
            res.render("comments/edit", 
            {
                camp_id: req.params.id,
                comment: foundComment
            });  
        }
    }); 
})

// COMMENTS - UPDATE ROUTE
router.put("/:comment_id/", middleware.isCommentOnwer, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, 
        function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                res.redirect("/campgrounds/" + req.params.id);
            }
        }
    );
});

// COMMENTS - DESTROY ROUTE
router.delete("/:comment_id", middleware.isCommentOnwer, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err, comment){
       if(err){
           res.redirect("back");
       } else {
           res.redirect("/campgrounds/" + req.params.id)
       }
    });
});

module.exports = router;