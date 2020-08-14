function logicPhase(game) {	//Logic phase
	game.incScore(game.getBonus());
	
	if (game.getIt() % 10 == 0) {
		game.incSpeed();
	}

	//Move background
	for (var i in game.background) {
		game.background[i].yPos += game.getSpeed();
		if (game.background[i].yPos > BOARD.height * M) {
			game.background[i].yPos = ((BOARD.height * M) - (800 * M)) + game.getSpeed();
		}
	}
	
	//Generate obstacles
	if (game.getIt() % Math.floor((75 * M) / game.getSpeed()) == 0) {
		var newO = new Obstacle();
		game.obstacles.push(newO);
	}
	
	//Move obstacles
	for (var i in game.obstacles) {
		game.obstacles[i].move(game.getSpeed());
		if (game.obstacles[i].getY() > (450 * M)) {
			game.obstacles.splice(i, 1);
		}
	}
	
	//Move car
	if (CONTROL.left) {
		game.car.moveLeft(game.getSpeed());
	}
	if (CONTROL.right) {
		game.car.moveRight(game.getSpeed());
	}
	
	//Detect collision
	var cBox = game.car.getBox();
	var cbBox = game.car.getBonusBox();
	
	for (var i in game.obstacles) {
		var oBox = game.obstacles[i].getBox();
		
		if (doesIntersect(cBox, oBox)) {	//Game over
			game.gameOver();
		}
		else if (doesIntersect(cbBox, oBox)) {
			game.incScore(10);
		}
	}
	
	function doesIntersect(box1, box2) {
		if (
				(	//There is no space between objects on either side
					(box1[0] - box2[2] < 0) &&	//Left side of car is inside right side of ob
					(box2[0] - box1[2] < 0)		//Right side of car is inside left side of ob
				) &&
				(	//There is no space between the tops and bottoms
					(box1[1] - box2[3] < 0) &&	//
					(box2[1] - box1[3] < 0)
				)
			) {	//Game over
			return true;
		}
	}
}