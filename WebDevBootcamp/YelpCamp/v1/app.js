var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campGrounds = [
    {name: "Simon Creek", image: 'https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg'},
    {name: "Crazy Dog", image: 'https://farm9.staticflickr.com/8305/28863132143_b8358c027f.jpg'},
    {name: "Silver Bullet", image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'},
    {name: "Simon Creek", image: 'https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg'},
    {name: "Crazy Dog", image: 'https://farm9.staticflickr.com/8305/28863132143_b8358c027f.jpg'},
    {name: "Silver Bullet", image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'},
    {name: "Simon Creek", image: 'https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg'},
    {name: "Crazy Dog", image: 'https://farm9.staticflickr.com/8305/28863132143_b8358c027f.jpg'},
    {name: "Silver Bullet", image: 'https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg'}];

app.get('/', function(req, res){
   res.render('landing');
});

app.get('/campgrounds', function(req, res){
    res.render('campgrounds', {campGrounds: campGrounds});
});

app.get('/campgrounds/new', function(req, res){
   res.render('new');
});

app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var url = req.body.url;
    var newCampGround = {name: name, image: url};
    campGrounds.push(newCampGround);
    res.redirect('/campgrounds');
});

app.listen(process.env.PORT, process.env.HOST, function(){
    console.log("Server running!!");
});