document.getElementById('carSel').onchange = function() {
	console.log(this.value);
	TEXTURES['car'].src = 'textures/' + this.value;
}
document.getElementById('speedScale').onchange = function() {
	document.getElementById('spdM').innerHTML = document.getElementById('speedScale').value;
}
document.getElementById('frameScale').onchange = function() {
	document.getElementById('frameD').innerHTML = document.getElementById('frameScale').value;
}
document.getElementById('spdInc').onchange = function() {
	document.getElementById('incO').innerHTML = document.getElementById('spdInc').value;
}
document.getElementById('bufferScale').onchange = function() {
	document.getElementById('bufO').innerHTML = document.getElementById('bufferScale').value;
}
document.getElementById('optTog').onchange = function() {
	CHEATS = document.getElementById('optTog').checked;
	console.log(CHEATS);
	
	if (CHEATS) {
		document.getElementById('speedScale').disabled = false;
		document.getElementById('frameScale').disabled = false;
		document.getElementById('spdInc').disabled = false;
		document.getElementById('cheats').className = '';
	}
	else {
		document.getElementById('speedScale').disabled = true;
		document.getElementById('frameScale').disabled = true;
		document.getElementById('spdInc').disabled = true;
		document.getElementById('cheats').className = 'disabled';
	}
}

var opt = false;
document.getElementById('optControl').onclick = function() {
	GAME.pause(true);
	
	if (opt) {
		document.getElementById('optList').className = 'invisible';
		opt = false;
	}
	else {
		document.getElementById('optList').className = 'visible';
		opt = true;
	}
}
