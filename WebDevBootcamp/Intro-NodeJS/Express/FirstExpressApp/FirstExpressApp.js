var app = require("express")();

app.get("/", function(req, res){
    res.send("hello!");
});

app.get("/bye", function(req, res){
    console.log("I am a backend application!");
    res.send("Goodbye!");
});

app.get("/r/:SubredditName", function(req, res){
    res.send("Welcome to this " + req.params.SubredditName);
});


app.get("/*", function(req, res){
    res.send("Page not Found!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!\n");
});