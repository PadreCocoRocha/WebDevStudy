var li = document.querySelectorAll("li");

li.forEach(function(el){
  el.addEventListener("mouseover", function(){
    this.style.color = "green";
  });
  el.addEventListener("mouseout", function(){
    this.style.color = "black";
  });
  el.addEventListener("click", function(){
    this.classList.toggle("done");
  })
});
