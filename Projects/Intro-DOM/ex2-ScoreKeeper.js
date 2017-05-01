playerBt = [ document.querySelector("#p1"), document.querySelector("#p2") ];
scoreDisp = [ document.querySelector("#sc1"), document.querySelector("#sc2") ];
rstBt = document.querySelector("#rst");

var iScore = [0, 0];
var iMaxScore = 5;
var bGameOver = false;

function AddScore(pn){
  console.log("called");
  if (!bGameOver){
    iScore[pn]++;
    scoreDisp[pn].textContent = iScore[pn];
    console.log(iScore[0], iScore[1], iMaxScore);
    if (iScore[pn] === iMaxScore){
      scoreDisp[pn].classList.add("winner");
      bGameOver = true;
    }
  }
}

playerBt[0].addEventListener("click", AddScore(0));
playerBt[1].addEventListener("click", AddScore(1));

function reset(){
  iScore[0] = 0;
  iScore[1] = 0;
  scoreDisp[0].textContent = iScore[0];
  scoreDisp[1].textContent = iScore[1];
  scoreDisp[0].classList.remove("winner");
  scoreDisp[1].classList.remove("winner");
  bGameOver = false;
}

rstBt.addEventListener("click", function(){
  reset();
});

document.querySelector("input").addEventListener("change", function(){
  reset();
  iMaxScore = Number(this.value);
  document.querySelector("p span").textContent = this.value;
});
