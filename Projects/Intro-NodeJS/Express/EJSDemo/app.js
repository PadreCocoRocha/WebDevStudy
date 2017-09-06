var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req,res){
   res.render('home');
});

app.get("/filw/:thing", function(req,res){
    var thing = req.params.thing;
    res.render('love', {thing: thing});
});

app.get("/posts", function(req,res){
   var posts = [
       {title: "my first post", author: 'Susi'},
       {title: "oh shit man", author: 'Alex'},
       {title: "Cmmonnn sweet babe!", author: 'Andrew'}
       ] 
    res.render('posts', {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!");
})