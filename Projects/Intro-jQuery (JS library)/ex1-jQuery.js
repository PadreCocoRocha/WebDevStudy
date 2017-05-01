// Exercise 1 - CSS manipulation

// $("div").css("background", "purple");
// $(".highlight").css("width", "200px");
// $("#third").css("border", "2px solid orange");
// $("div:first-of-type").css("color", "pink");

// Exercise 2 - event trigger

// $("input").keypress(function(ev){
//   console.log(ev.which);
// });

// \/ == /\
// $("input").on("keypress", function(event){
//   console.log(event.which);
// });
//
// $("h1").on("click", function(){
//   $(this).css("color", "pink");
// });

// Execise 3 - Effects
$("button").on("click", function(){
  $("li").fadeOut(500, function(){
    console.log("Fade completed!");
    // $("li").remove();
    // $("li").fadeIn(500, function(){
    //   console.log("Oh, damn!");
    // });
  });
});
