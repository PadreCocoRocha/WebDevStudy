var app = require("express")();

app.get("/", function(req,res){
    res.send("Hello, welcome to my assignment!");
});
    

app.get("/speak/:name", function(req,res){
    var sound = {
        "pig": "Oink!",
        "cow": "Moooo!",
        "dog": "Auf Auf!"
    }
    res.send(sound[req.params.name]);
});

app.get("/repeat/:str/:n", function(req,res){
    var n = Math.abs(Number(req.params.n));
    var str = req.params.str;
    for (var i = 0; i < n - 1; i++){
        str += (" " + req.params.str);
    }
    res.send(str);
});

app.get("*", function(req,res){
   res.send("Page not found, what are you doing with your life??"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!\n");
});
