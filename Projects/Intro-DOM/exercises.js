// ***** DOM Manipulation - ex 1 (firstExDOM.html)*****

// p = document.querySelector("p");
// p = document.querySelector(".special");
// p = document.querySelector("#first");
// p = document.querySelectorAll("p")[0];
// p = document.getElementById('first');

// Action on click button
  
var button = document.querySelector("button");
if (button){
  button.addEventListener("click", function(){
    document.body.classList.toggle('tog');
  });
}
