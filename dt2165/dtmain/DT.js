//	Define Globals
var SCORE_VERSION = '12';
var HIGH_SCORE = '0';

var CHEATS = false;

var M = 1;	//Essentially controls the size of the buffer canvas, and scales everything to match.

var BOARD = {
	'width': 300,
	'height': 450,
	'ctx': document.getElementById('dtFrame').getContext('2d')
}

var GAME = {};
GAME.pause = function(){};
GAME.state = 0;

loadScore();

//	Functions

function loadScore() {
	if (window.localStorage.highscore != undefined && window.localStorage.scoreversion != undefined) {
		if (window.localStorage.scoreversion == SCORE_VERSION) {
			HIGH_SCORE = window.localStorage.highscore;
		}
		else {
			HIGH_SCORE = 0;
			window.localStorage.highscore = 0;
			window.localStorage.scoreversion = SCORE_VERSION;
		}
	}
	else {
		HIGH_SCORE = 0;
		window.localStorage.highscore = 0;
		window.localStorage.scoreversion = SCORE_VERSION;
	}
	
	document.getElementById('hs').innerHTML = HIGH_SCORE;
}

function gameStart() {	//Start the game
	GAME = 1;
	
	loadResources();
	loadScore();
	
	M = document.getElementById('bufferScale').value;
	
	GAME = new Game();

	setDisplay(false);
	main();
//	window.setInterval(main, 20);
}

function main(t) {
	if (GAME.counter < GAME.frameLim) {
		GAME.counter++;
	}
	else {
		GAME.counter = 1;
		GAME.iterate();
		logicPhase(GAME);
		renderPhase(GAME);
	}
	if (GAME.state == 1) {
		if (typeof window.requestAnimationFrame == 'function') {
			window.requestAnimationFrame(main);
		}
		else {
			if (GAME.getIt() == 1) {
				alert('WARNING\nYour device is outdated, this application may function poorly.');
			}
			window.setTimeout(main, 16.6);
		}
	}
	BOARD.ctx.drawImage(GAME.getBuffer(), 0, 0, 300, 450);
}

function loadResources() {
	if (TEXTURES['null'] == true) {
		for (var i in TNAMES) {
			TEXTURES[TNAMES[i]] = new Image();
			TEXTURES[TNAMES[i]].src = 'dtmain/textures/' + TNAMES[i] + '.png';
			TEXTURES[TNAMES[i]].className = 'i3';
		}
		
		TEXTURES['null'] = false;
	}
}

function gameOver(score) {
	GAME.state = 2;
	
	console.log('Game Over: ' + score);
	setDisplay('Game Over!');
	
	if (score > HIGH_SCORE && !CHEATS) {
		HIGH_SCORE = score;
		document.getElementById('hs').innerHTML = HIGH_SCORE;
		window.localStorage.highscore = HIGH_SCORE;
	}
}

function setDisplay(msg) {
	var over = document.getElementById('overlay');
	var title = document.getElementById('title');
	
	if (msg) {
		over.className = 'visible';
		title.innerHTML = msg;
	}
	else {
		over.className = 'invisible';
	}
}
		