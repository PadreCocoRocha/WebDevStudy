var express         = require("express"),
    mongoose        = require("mongoose"),
    bodyparser      = require("body-parser"),
    methodOverride  = require("method-override"),
    exprssSanitizer = require("express-sanitizer"),
    app             = express();
    
mongoose.connect("mongodb://localhost/blog");
app.use(exprssSanitizer());
app.use(methodOverride("_method"));
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Mongoose model cfg
var blogSchema = new mongoose.Schema({
    title: String,
    image: { type: String, default: "https://farm3.staticflickr.com/2294/5714918936_3e022b4a53.jpg" },
    body: String,
    created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("blog", blogSchema);

// RESTful routes
// INDEX redirect from root
app.get("/", function(req, res){
    res.redirect("/blogs");
});

// INDEX route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW route
app.get("/blogs/new", function(req, res){
    res.render("new");
})


// CREATE route
app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    Blog.create(req.body.blog, function(err, blog){
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("New blog entry: " + blog);
            res.redirect("/blogs");
        }
    });
});

// EDIT route
app.get('/blogs/:id/edit', function(req, res){
    Blog.findById(req.params.id, function(err, blogFound){
        if (err){
            res.redirect("/blogs");
        } else{
            res.render('edit', {blogFound: blogFound});
        }
    });
});

// UPDATE route
app.put("/blogs/:id", function(req, res){
   req.body.blog.body = req.sanitize(req.body.blog.body);
   
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
       if(err){
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs/" + blog._id);
       }
   });
});

// DESTROY route
app.delete("/blogs/:id", function(req, res){
   Blog.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/blogs");
          console.log(err);
      } else{
          res.redirect("/blogs");
      }
   });
});

// SHOW route
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, blogFound){
     if (err) {
        res.send("Dude, we got an error! " + err);
     } else{
        res.render("show", {blogFound: blogFound});
     }
   });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running");
});
