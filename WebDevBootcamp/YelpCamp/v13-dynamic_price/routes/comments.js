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
           req.flash("error", err.message);
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
           req.flash("error", err.message);
           res.redirect("/campgrounds/:" + req.params.id);
       } else {
           Comment.create(req.body.comment, function(err, commentCreated){
                if (err) {
                    req.flash("error", err.message)
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
                    req.flash("success", "Comment created!")
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
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success", "Comment succesfully edited!");
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
                req.flash("error", err.message);
                return res.redirect("back");
            }
            res.redirect("/campgrounds/" + req.params.id);
        }
    );
}); 

// COMMENTS - DESTROY ROUTE
router.delete("/:comment_id", middleware.isCommentOnwer, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err, comment){
       if(err){
            req.flash("error", "Comment could not be deleted!");
            res.redirect("back");
       } else {
            req.flash("success", "Comment successfully deleted!");
            res.redirect("/campgrounds/" + req.params.id)
       }
    });
});

module.exports = router;