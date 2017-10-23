var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [{
        name: "Mystic Camp",
        image: "https://farm5.staticflickr.com/4112/5012796292_1ab0f8a60d.jpg",
        description: "Come get highly crazy! Or crazily high? Whatever you prefer!"
    },
    {
        name: "Frozen Camp",
        image: "https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg",
        description: "Only night walkers allowed."
    },
    {
        name: "Cooking Camp",
        image: "https://farm9.staticflickr.com/8143/7626450034_4e9fd2be2c.jpg",
        description: "Come with us to become a Schmuckster Chef",
    }
];
var HomerLacks = ["LSD", "Dead People", "Truffles"];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("All campgrounds have been removed!");
        // Add a few campgrounds
        data.forEach(function(camp, i) {
            Campground.create(camp, function(err, addedCamp) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(addedCamp);
                    // Add a few comments
                    Comment.create(
                        {
                            text: "this place is great, but  I wish there was more " + HomerLacks[i],
                            author: "Homer"
                        }, function(err, comment){
                            if (err){
                                console.log(err);
                            } else {
                                addedCamp.comments.push(comment);
                                addedCamp.save();
                                console.log(comment);
                            }
                        }
                    );
                }
            });
        });
    });
}

module.exports = seedDB;
