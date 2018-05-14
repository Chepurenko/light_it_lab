import {width, height, validation, gebi} from "./const";

let template = [];
let walls = [];
let curentPosition = [0,0];

export function createTemplate(){
  for (let x = 0; x < width; x++) {
    template[x] = [];

    for (let y = 0; y < height; y++) {
      template[x][y] = "pass";
      let cell = gebi('maze').appendChild(document.createElement("div"));
      cell.className = 'block';
      cell.setAttribute('id', x+'-'+y);
    }
  }
  gebi('0-0').className = 'block start';
  gebi('20-20').className = 'block finish';
}

export function clearTemplate(){
  gebi('maze').innerHTML = '';
}

export function createMaze() {
  template.forEach(function (x) {
    for (let y = 0; y < x.length; y++) {
      x[y] = "wall"
    }
  });
  document.querySelectorAll('.block').forEach(function (i) {
    i.className = 'block wall';
  });
  amaze(curentPosition[0], curentPosition[1]);

  function amaze(x, y) {
    template[x][y] = "pass";
    gebi(x + '-' + y).className = 'block';
    if (validation(x + 1, y) && (template[x + 1][y] === "wall")) walls.push([x + 1, y, [x, y]]);
    if (validation(x - 1, y) && (template[x - 1][y] === "wall")) walls.push([x - 1, y, [x, y]]);
    if (validation(x, y + 1) && (template[x][y + 1] === "wall")) walls.push([x, y + 1, [x, y]]);
    if (validation(x, y - 1) && (template[x][y - 1] === "wall")) walls.push([x, y - 1, [x, y]]);
  }
  while (walls.length !== 0) {
    let rdmWall = walls[Math.floor(Math.random() * walls.length)];
    let prewCell = rdmWall[2];
    let nextCell = [(prewCell[0] + (rdmWall[0] - prewCell[0]) * 2), (prewCell[1] + (rdmWall[1] - prewCell[1]) * 2)];
    if (validation(nextCell[0], nextCell[1])) {
      if (template[nextCell[0]][nextCell[1]] === "pass") {
        walls.splice(walls.indexOf(rdmWall), 1);
      }
      else {
        template[rdmWall[0]][rdmWall[1]] = "pass";
        gebi(rdmWall[0] + '-' + rdmWall[1]).className = 'block';
        amaze(nextCell[0], nextCell[1]);
      }
    }
  }
}

