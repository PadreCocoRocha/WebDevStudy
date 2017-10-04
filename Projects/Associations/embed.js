// Embedded data example

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});
var User = mongoose.model("user", userSchema);

// // new user!
// var newUser = new User({
//     email: "hermione@hogwarts.com",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//   title: "How to make a polyjuice potion",
//   content: "Just kidding, Goto potions class and learn it!"
// });
// newUser.save(function(err, ret){
//     if (err){
//         console.log("Error: " + err);
//     } else {
//         console.log("New Data: " + ret);
//     }
// });

// // new post
// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious"
// });

// newPost.save(function(err, ret){
//     if (err) {
//         console.log("Error: " + err);
//     } else {
//         console.log("New post: " + ret);
//     }
// })

User.findOne({name: "Hermione Granger"}, function(err, user){
    if (err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things I really hate",
            content: "Voldemort, Voldemort and Voldemort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});