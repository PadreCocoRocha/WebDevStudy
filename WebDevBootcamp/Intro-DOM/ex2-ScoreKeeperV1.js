console.log("alive");

p1Bt = document.querySelector("#p1");
p2Bt = document.querySelector("#p2");
rstBt = document.querySelector("#rst");
sc1Disp = document.querySelector("#sc1");
sc2Disp = document.querySelector("#sc2");

var iScoreP1 = 0;
var iScoreP2 = 0;
var iMaxScore = 5;
var bGameOver = false;

p1Bt.addEventListener("click", function(){
  if (!bGameOver){
    iScoreP1++;
    sc1Disp.textContent = iScoreP1;
    console.log(iScoreP1, iScoreP2, iMaxScore);
    if (iScoreP1 === iMaxScore){
      sc1Disp.classList.add("winner");
      bGameOver = true;
    }
  }
});

p2Bt.addEventListener("click", function(){
    if (!bGameOver){
      iScoreP2++;
      sc2Disp.textContent = iScoreP2;
      console.log(iScoreP1, iScoreP2, iMaxScore);
      if (iScoreP2 === iMaxScore){
        sc2Disp.classList.add("winner");
        bGameOver = true;
      }
    }
});

function reset(){
  console.log("alive REST");
  iScoreP1 = 0;
  iScoreP2 = 0;
  sc1Disp.textContent = iScoreP1;
  sc2Disp.textContent = iScoreP2;
  sc1Disp.classList.remove("winner");
  sc2Disp.classList.remove("winner");
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
