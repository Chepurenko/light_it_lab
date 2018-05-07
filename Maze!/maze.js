	
	var width = 11;
	var height = 11;
	var template = [];
	var walls = [];
	var curentPosition = [0,0];


function createTemplate(){
	
	for (var x = 0; x < width; x++) {
		template[x] = [];

		for (var y = 0; y < height; y++) {
			template[x][y] = "wall"
			var cell = document.getElementById('maze').appendChild(document.createElement("div"));
		    cell.className = 'block wall';
		    cell.setAttribute('id', x+'-'+y);
		}
	}
};
createTemplate();

function createMaze() {

	function validation (a, b) {
		return (a >= 0 && a < width && b >= 0 && b < height) ?	true : false
	};
	amaze(curentPosition[0], curentPosition[1])


	function amaze(x, y) {
		template[x][y] = "pass"
		document.getElementById(x+'-'+y).className = 'block';

		if (validation(x+1, y) && (template[x+1][y] == "wall")) walls.push([x+1, y, [x ,y]]);
		if (validation(x-1, y) && (template[x-1][y] == "wall")) walls.push([x-1, y, [x ,y]]);
		if (validation(x, y+1) && (template[x][y+1] == "wall")) walls.push([x, y+1, [x ,y]]);
		if (validation(x, y-1) && (template[x][y-1] == "wall")) walls.push([x, y-1, [x ,y]]);
	}


	while (walls.length != 0) {
	
	var rdmWall = walls[Math.floor(Math.random() * walls.length)];
	var prewCell = rdmWall[2];
	var nextCell = [(prewCell[0] + (rdmWall[0]-prewCell[0])*2), (prewCell[1] + (rdmWall[1]-prewCell[1])*2)];


		if (validation(nextCell[0],nextCell[1])) {
			if (template[nextCell[0]][nextCell[1]] == "pass") {
				walls.splice(walls.indexOf(rdmWall), 1);
				// document.getElementById(rdmWall[0]+'-'+rdmWall[1]).className = 'block';
			} else {
			 	template[rdmWall[0]][rdmWall[1]] = "pass";
				document.getElementById(rdmWall[0]+'-'+rdmWall[1]).className = 'block';
				amaze(nextCell[0], nextCell[1]);
			  	}
		} 

	}console.log(walls);

	document.getElementById('0-0').className = 'block me';
  	document.getElementById((parseInt(width)-1)+'-'+(parseInt(height)-1)).className = 'block finish';
  	
  	document.body.onkeydown = function(e) {
    	
    	var newPosition = [curentPosition[0] + ((e.keyCode - 39) % 2), curentPosition[1] + ((e.keyCode - 38) % 2)];
    		console.log(newPosition);
    	if (validation(newPosition[0],newPosition[1]) && template[newPosition[0]][newPosition[1]] != 'wall') {
      		document.getElementById(curentPosition[0]+'-'+curentPosition[1]).className = 'block';
      		curentPosition = newPosition;
      		document.getElementById(curentPosition[0]+'-'+curentPosition[1]).className = 'block me';
      		if (curentPosition[0] == width-1 && curentPosition[1] == height-1) document.getElementById('complete').setAttribute('style','display:block');
    	}
  	}
};

createMaze();