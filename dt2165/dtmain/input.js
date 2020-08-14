CONTROL = {
	'left': false,
	'right': false
}

document.getElementById('lC').ontouchstart = function() {
	CONTROL.left = true;
	GAME.resetBonus();
}
document.getElementById('lC').ontouchend = function() {
	CONTROL.left = false;
	GAME.resetBonus();	
}

document.getElementById('rC').ontouchstart = function() {
	CONTROL.right = true;
	GAME.resetBonus();
}
document.getElementById('rC').ontouchend = function() {
	CONTROL.right = false;
	GAME.resetBonus();
}
window.onkeydown = function(e) {
	if ((e.keyCode == 37) || (e.keyCode == 65)) {
		CONTROL.left = true;
		GAME.resetBonus();
	}
	if ((e.keyCode == 39) || (e.keyCode == 68)) {
		CONTROL.right = true;
		GAME.resetBonus();
	}
	if (e.keyCode == 32) {
		cont();
	}
}
window.onkeyup = function(e) {
	if ((e.keyCode == 37) || (e.keyCode == 65)) {
		CONTROL.left = false;
		GAME.resetBonus();
	}
	if ((e.keyCode == 39) || (e.keyCode == 68)) {
		CONTROL.right = false;
		GAME.resetBonus();
	}
}

window.onblur = function() { 
	GAME.pause(true);
}

document.getElementById('overlay').onclick = cont;
document.getElementById('overlay').ontouchstart = cont;

function cont() {
	if (GAME.state == 0 || GAME.state == 2) {
		gameStart();
	}
	else {
		GAME.pause();
	}
}