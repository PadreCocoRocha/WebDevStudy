var app = require('express')();

app.get("/", function(req, res){
    res.send("Hello!");
});

app.get("/speak/:animal", function(req,res){
   var sounds = {
       pig: '"oinnc!"',
       cow: '"muuuuh"',
       dog: '"Auf"!',
       goldfish: '"..."'
   }
    res.send("The " + req.params.animal + " says " + sounds[req.params.animal] + "!");
});

app.get("/repeat/:message/:times", function(req,res){
    var msg = req.params.message;
    var n = Number(req.params.times);
    var str = "";
    for (var i = 0; i < n; i++) str += msg;
    res.send(str);
});

app.get("*", function(req,res){
   res.send("Page not found, what are you doing with your life??"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});


