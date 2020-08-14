function renderPhase(game) {	//Render phase
	for (var i in game.background) {
		game.background[i].paint(game.canvas);
	}
	
	for (var i in game.obstacles) {
		game.obstacles[i].paint(game.canvas);
	}
	
	game.car.paint(game.canvas);
	game.scoreboard.innerHTML = game.getScore();
}