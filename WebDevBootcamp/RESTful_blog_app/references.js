// Embedded data example

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//     title: "How to cook the best burguer pt. 4",
//     content: "huge amounts of gibberish"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//       if(err) {
//           console.log(err);
//       } else {
//           foundUser.posts.push(post);
//           foundUser.save(function(err, post){
//               if(err) {
//                   console.log(err);
//               } else{
//                   console.log(post);
//               }
//           });
//       }
//     });
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
   if (err) {
       console.log(err);
   } else {
       console.log(user);
   }
});