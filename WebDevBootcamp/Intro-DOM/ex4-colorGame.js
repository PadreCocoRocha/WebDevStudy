var correctColor = "";
var squares = document.querySelectorAll("div .square"),
    colorDisplay = document.getElementById("colorDisplay"),
    messageDisplay = document.querySelector("#messageDisplay"),
    resetButton = document.querySelector("#reset"),
    h1 = document.querySelector("h1"),
    modeButtons = document.querySelectorAll(".mode"),
    // levels = ["Easy", "Intermediate", "Hard"];
    level = 1;

Reset();
AddEventListeners();

function AddEventListeners(){
  modeButtons.forEach(function(modeBt, n){
    modeBt.addEventListener("click", function(){
      level = n;
      Reset();
      modeButtons.forEach(function(md, m){
        if (m === n) md.classList.add("selected");
        else md.classList.remove("selected");
      });
    });
  });

  resetButton.addEventListener("click", function(){
    Reset();
  });

  squares.forEach(function(el, n){
    el.addEventListener("click", function(){
      clickedColor = this.style.background;
      if (clickedColor === correctColor){
        ChangeColors(clickedColor);
        h1.style.background = correctColor;
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Try Again?";
      } else{
        messageDisplay.textContent = "Try Again";
        this.style.background = "#303030";
      }
    });
  });
}

function ChangeColors(color){
  // Loop through all squares
  squares.forEach(function(square){
    square.style.background = color;
  });
}

function PickRandomColor(){
  var color = "rgb(";
  color += String(Math.floor(Math.random() * 256));
  color += ", " + String(Math.floor(Math.random() * 256));
  color += ", " + String(Math.floor(Math.random() * 256));
  color += ")";
  return color;
}

function PickCorrectColor(){
  n = Math.floor(Math.random()*(level*3));
  correctColor = squares[n].style.background;
  colorDisplay.textContent = correctColor;
  return correctColor;
}

function InitializeSquares(){
  squares.forEach(function(el, n){
    el.style.background = PickRandomColor();
  });
  squares.forEach(function(sqr, i){
    if (i < level*3 + 3){
      sqr.style.display = "block";
    } else{
      sqr.style.display = "none";
    }
  });
}

function Reset(){
  InitializeSquares();
  correctColor = PickCorrectColor();
  resetButton.textContent = "New Color";
  messageDisplay.textContent = "";
  h1.style.background = "steelblue";

}
