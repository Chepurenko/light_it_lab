import {validation, gebi} from "./const";

export function route() {

  let waves = [];
  gebi("0-0").dataset.index = "0";
  wave(0,0);

  function wave(x, y) {

    if (validation(x+1, y) && gebi((x+1)+'-'+y).dataset.index === undefined  && (gebi((x+1)+'-'+y).className !== "block wall")) {
      waves.push([x+1, y]);
      gebi((x+1)+'-'+y).dataset.index = (+gebi(x+'-'+y).dataset.index + 1);
    }
    if (validation(x-1, y) && gebi((x-1)+'-'+y).dataset.index === undefined  && (gebi((x-1)+'-'+y).className !== "block wall")) {
      waves.push([x-1, y]);
      gebi((x-1)+'-'+y).dataset.index = (+gebi(x+'-'+y).dataset.index + 1);
    }
    if (validation(x, y+1) && gebi(x+'-'+(y+1)).dataset.index === undefined  && (gebi(x+'-'+(y+1)).className !== "block wall")) {
      waves.push([x, y+1]);
      gebi(x+'-'+(y+1)).dataset.index = (+gebi(x+'-'+y).dataset.index + 1);
    }
    if (validation(x, y-1) && gebi(x+'-'+(y-1)).dataset.index === undefined  && (gebi(x+'-'+(y-1)).className !== "block wall")) {
      waves.push([x, y-1]);
      gebi(x+'-'+(y-1)).dataset.index = (+gebi(x+'-'+y).dataset.index + 1);
    }
  }
  while (waves.length !== 0) {
    waves.forEach(function(item){
      waves.splice(waves.indexOf(item), 1);
      wave(item[0],item[1]);
    })
  }
  let steps =[];

  step(20, 20);
  function step(x,y) {
    if (validation(x+1, y) && gebi((x+1)+'-'+y).className !== "block road"
      && gebi(x+'-'+y).id !== "0-0" && gebi((x+1)+'-'+y).dataset.index !== undefined
      && (+gebi((x+1)+'-'+y).dataset.index) === (+gebi(x+'-'+y).dataset.index) - 1) {
        steps.push([x+1, y]);
        gebi((x+1)+'-'+y).className = "block" + " road";
    }

    if (validation(x-1, y) && gebi((x-1)+'-'+y).className !== "block road"
      && gebi(x+'-'+y).id !== "0-0" && gebi((x-1)+'-'+y).dataset.index !== undefined
      && (+gebi((x-1)+'-'+y).dataset.index) === (+gebi(x+'-'+y).dataset.index) - 1) {
      steps.push([x-1, y]);
      gebi((x-1)+'-'+y).className = "block" + " road";
    }

    if (validation(x, y+1) && gebi(x+'-'+(y+1)).className !== "block road"
      && gebi(x+'-'+y).id !== "0-0" && gebi(x+'-'+(y+1)).dataset.index !== undefined
      && (+gebi(x+'-'+(y+1)).dataset.index) === (+gebi(x+'-'+y).dataset.index) - 1) {
      steps.push([x, y+1]);
      gebi(x+'-'+(y+1)).className = "block" + " road";
    }

    if (validation(x, y-1) && gebi(x+'-'+(y-1)).className !== "block road"
      && gebi(x+'-'+y).id !== "0-0" && gebi(x+'-'+(y-1)).dataset.index !== undefined
      && (+gebi(x+'-'+(y-1)).dataset.index) === (+gebi(x+'-'+y).dataset.index) - 1) {
      steps.push([x, y-1]);
      gebi(x+'-'+(y-1)).className = "block" + " road";
    }

  }
  while (steps.length !== 0) {
    steps.forEach(function(item) {
      steps.splice(steps.indexOf(item), 1);
      step(item[0],item[1])
    })
  }
  if (gebi("20-20").dataset.index === undefined) {
    alert("maze does not have a passage")
  }
}

