var todos = ["Buy Ferrari F50"];

var input;
var more = true;


function list(){
  console.clear();
  todos.forEach(function(todo,i){
    console.log(i + ": " + todo);
  });
}

function newTodo(){
  todos.push(prompt("What would you like to add?"));
  console.log("Added new Todo");
}

function deleteTodo(){
  var idx = prompt("Enter index of todo to be deleted");
  todos.splice(idx,1);
  console.log("Item Deleted");
}

while(more){
  input = prompt("What would you like to do?");
  switch (input) {
    case "new":
      list();
      newTodo();
      break;
    case "list":
      list();
      break;
    case "delete":
      list();
      deleteTodo();
      break;
    case "quit":
      more = false;
      break;
    default:
      console.log("Sorry, Invalid Option");
      break;
  }
}
