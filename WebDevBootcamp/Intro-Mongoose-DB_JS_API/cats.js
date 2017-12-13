var mongoose = require('mongoose');
mongoose.connect( "mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 235,
//     temperament: 'Evil'
// })

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG");
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB oO");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "John Snow",
    age: 32,
    temperament: "Ressurectionative"
}, function(err, cat){
    if (err){
        console.log("Error:" + err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if (err){
        console.log("OH NO!!!! ERRRRRORR");
        console.log(err);
    } else {
        console.log(cats);
    }
});