$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); // To avoid parent listener to trigger
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    $("ul").append("<li>"+ "<span><i class=\"fa fa-trash-o\"></i></span> " + $(this).val() + "</li>");
    $(this).val("");
  }
});

$(".fa-plus").click(function(){
  $("input").slideToggle(400);
});
