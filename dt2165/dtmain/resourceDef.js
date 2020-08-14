var TNAMES = [
//Defines the names of all the resource files
	'car',
	'backGround',
	'obstacle1',
	'obstacle2',
	'obstacle3',
	'obstacle4',
	'obstacle5',
	'obstacle6',
	'obstacle7',
	'obstacle8',
	'obstacle9'
];

var OBST_DIST = [	
//Defines the relative rarity of obstacles
//Array index corresponds to obstacle number
	0,	//	Empty					0
	6,	//	Horizontal divider		1
	9,	//	Tire					2
	3,	//	Junk left (vert)		3
	3,	//	Vertical divider		4
	3,	//	Junk right (vert)		5
	3,	//	Horizontal junk			6
	1,	//	Car wreak red			7
	1,	//	Car wreak yellow		8
	1	//	Car wreak blue			9
];

var OBST_DIST_SUM = 0;
for (var i in OBST_DIST) {
	OBST_DIST_SUM += OBST_DIST[i];
}

var TEXTURES = {'null':true};