// All middleware goes here
var Campground  = require("../models/campground"),
    Comment     = require("../models/comment");
var middlewareObj = {};


middlewareObj.isLoggedIn = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in.")
    res.redirect("/login");
};

middlewareObj.isCampgroundOwner = function(req, res, next) {
    // is the user logged in?
    if (req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if (err){
                res.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                // is the user the owner of the campground?
                if (foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.flash("error", "You don't have the required permissions.");
                    res.redirect("back");
                }
            }
        });
    } else {
        res.flash("error", "You need to be logged in.");
        res.redirect("/login");
    }
};

middlewareObj.isCommentOnwer = function (req, res, next) {
    // is the user logged in?
    if (req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if (err){
                res.flash("error", "Comment not found!");
                res.redirect("/campgrounds");
            } else {
                // is the user the owner of the comment?
                if (foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.flash("error", "You don't have the required permissions.");
                    res.redirect("back");
                }
            }
        });
    } else {
        res.flash("error", "You need to be logged in.");
        res.redirect("/login");
    }
};

module.exports = middlewareObj;