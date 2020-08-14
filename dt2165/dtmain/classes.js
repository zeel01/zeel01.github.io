//	Sprite
function Sprite(img, px, py) {	//Combination of an image with a location
	this.xPos = px;
	this.yPos = py;
	var texture = img;
	
	this.getWidth = function() {
		return texture.width * M;
	}
	this.getHeight = function() {
		return texture.height * M;
	}
	
	this.paint = function(ctx) {
		ctx.drawImage(texture, this.xPos, this.yPos, this.getWidth(), this.getHeight());
	}
}

//	Car
function Car() {	//Car class
	var speedScale = CHEATS ? document.getElementById('speedScale').value : 1;
	
	this.sprite = new Sprite(TEXTURES['car'], (140 * M), (BOARD.height * M * 0.75));	//140 centers it, (BOARD.width / 2) - (TEXTURES['car'].width / 2) should evaluate to 140. But it's not. . .
	
	this.paint = function(ctx) {
		this.sprite.paint(ctx);
	}
	
	this.moveLeft = function(o) {
		this.sprite.xPos -= (o * speedScale);
		if (this.sprite.xPos < 1) {
			this.sprite.xPos = 1;
		}
	}
	this.moveRight = function(o) {
		this.sprite.xPos += (o * speedScale);
		if (this.sprite.xPos > ((BOARD.width * M - 1) - this.sprite.getWidth())) {
			this.sprite.xPos = ((BOARD.width * M - 1) - this.sprite.getWidth());
		}
	}
	
	this.getBox = function() {
		return [
			this.sprite.xPos,
			this.sprite.yPos, 
			(this.sprite.xPos + this.sprite.getWidth()),
			(this.sprite.yPos + this.sprite.getHeight())
		];
	}
	
	this.getBonusBox = function() {
		return [
			this.sprite.xPos - (10 * M),
			this.sprite.yPos - (10 * M), 
			(this.sprite.xPos + this.sprite.getWidth()) + (10 * M),
			(this.sprite.yPos + this.sprite.getHeight()) + (10 * M)
		];
	}
}

//	Obstacle
function Obstacle() {	
	var rand = Math.floor(Math.random() * (OBST_DIST_SUM + 1));
	var version = 2;
	
	var run = 0;
	for (var i in OBST_DIST) {
		if (i == 0) { continue; }
		
		run += OBST_DIST[i];
		if (rand > run) {
			continue;
		}
		else {
			version = i;
			break;
		}
	}		
	
	var x = Math.floor(													//Makes it an integer
			Math.random() * (											//Multiply a random decimal by a limit
				(BOARD.width * M - (TEXTURES['obstacle' + version].width * M))	//The width of the game minus the width of this obstacle
				+ 1														//Range is one less than this number, so add an extra to compensate
			)
		)
	this.sprite = new Sprite(TEXTURES['obstacle' + version], x, -(TEXTURES['obstacle' + version].height * M));
	
	this.move = function(o) {
		this.sprite.yPos += o;
	}
		
	this.paint = function(ctx) {
		this.sprite.paint(ctx);
	}
	
	this.getBox = function() {
		return [
			this.sprite.xPos,
			this.sprite.yPos, 
			(this.sprite.xPos + this.sprite.getWidth()),
			(this.sprite.yPos + this.sprite.getHeight())
		];
	}
	this.getY = function() {
		return this.sprite.yPos;
	}
	
	function bet(num, min, max) {
		if (num >= min && num <= max) {
			return true;
		}
		else {
			return false;
		}
	}
}