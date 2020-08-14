function Game() {	//Game class
	var it = 0;
	var score = 0;
	var speed = 2;
	
	var bonus = 1;
	this.counter = 1;
	
	this.state = 1;
	
	this.car = new Car();
	
	this.background = [
		new Sprite(TEXTURES['backGround'], 0, ((BOARD.height * M) - (800 * M))),
		new Sprite(TEXTURES['backGround'], 0, ((BOARD.height * M) - (600 * M))),
		new Sprite(TEXTURES['backGround'], 0, ((BOARD.height * M) - (400 * M))),
		new Sprite(TEXTURES['backGround'], 0, ((BOARD.height * M) - (200 * M)))
	];
	
	this.obstacles = [];
	
	var elem = document.createElement('canvas');
	elem.width = BOARD.width * M;
	elem.height = BOARD.height * M;
	
	this.canvas = elem.getContext('2d');
//	this.canvas.webkitImageSmoothingEnabled = false;
	
	this.scoreboard = document.getElementById('score');
	
	if (CHEATS) {
		this.frameLim = document.getElementById('frameScale').value;		//Default is 1
		var spdInc = parseFloat(document.getElementById('spdInc').value);	//Default is .01
	}
	else {
		this.frameLim = 1;
		var spdInc = .01;
	}

	this.iterate = function() {
		it++;
		if (it % 50 == 0 && bonus < 5) {
			bonus++;
		}
	}
	this.getIt = function() {
		return it;
	}
	this.getSpeed = function() {
		return speed * 2 * M;
	}
	this.incSpeed = function() {
		speed += spdInc;
	}
	this.gameOver = function() {
		this.state = 2;
		delete elem;
		gameOver(score);
	}
	this.incScore = function(amt) {
		score += amt;
	}
	this.getScore = function() {
		return score;
	}
	this.getBonus = function() {
		return bonus;
	}
	this.resetBonus = function() {
		bonus = 1;
	}
	this.getBuffer = function() {
		return elem;
	}
	this.pause = function(notoggle) {
		GAME.resetBonus();
		if (this.state == 1) {
			this.state = 3;
			setDisplay('Paused');
		}
		else if (!notoggle) {
			this.state = 1;
			setDisplay(false);
			main();
		}
	}
}