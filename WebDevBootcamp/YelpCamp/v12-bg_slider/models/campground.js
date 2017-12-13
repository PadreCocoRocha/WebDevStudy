var mongoose = require("mongoose");

var CampSchema = new mongoose.Schema({
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    name: String,
    image: String,
    description: String,
    comments: [ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("campgrounds", CampSchema);