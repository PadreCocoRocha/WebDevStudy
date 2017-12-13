var p1b = $('#p1');
var p2b = $('#p2');
var p1sDisplay = $('#p1s');
var p2sDisplay = $('#p2s');
var numInput = $('#numInput');
var maxScoreDisplay = $('#maxScore');
var rst = $('#rst');

var p1s, p2s, max, gameFinished

p1s = p2s = 0
max = 5;
gameFinished = false

function checkScore(){
	if (p1s >= max){
		p1sDisplay.css('color', 'green');
		gameFinished = true;
	} else if (p2s >= max) {
		p2sDisplay.css('color', 'green');
		gameFinished = true;
	} else gameFinished = false;
}

function refreshScore(){
	p1sDisplay.text(p1s);
	p2sDisplay.text(p2s);
}

function reset(){
	gameFinished = false;
	p1s = p2s = 0;
	refreshScore();
	p1sDisplay.css('color', 'black');
	p2sDisplay.css('color', 'black');
}

p1b.click(function(){
	if (!gameFinished){
		p1s++;
		checkScore();
		refreshScore();
	}
});

p2b.click(function(){
	if (!gameFinished){
		p2s++;
		checkScore();
		refreshScore();
	}
});
	
rst.click(function(){
	reset();
});

numInput.on('change', function(){
	max = Number(numInput.val());
	maxScoreDisplay.text(max);
});