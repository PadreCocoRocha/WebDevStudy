var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var name = req.query.name;
    request('https://omdbapi.com/?s=' + name + '}&apikey=thewdb', function(err, reqRes, body){
        if (!err && reqRes.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render('results', {data: parsedData});
        } else {
            console.log('an error occured!');
        }
    });
});

// app.post('')

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Movie App Started!');
});