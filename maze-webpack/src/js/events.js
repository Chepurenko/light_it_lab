import {gebi, } from "./const";
import {clearTemplate, createTemplate, createMaze} from "./maze";
import {route} from './route'

export const windowLoad = () =>{
  window.onload = createTemplate();
};

export const cellHandler = e => {
  let target = e.target;
  gebi('maze').querySelectorAll(".block").forEach(function(i) {
    i.removeAttribute("data-index");
  });
  gebi('maze').querySelectorAll(".road").forEach(function(i) {
    i.classList.remove("road");
  });
  if (target.id === '0-0' || target.id === '20-20') {
    return
  }
  if (target.className === 'block') {
    target.className = 'block wall';
  }
  else {
    target.className = 'block';
  }
};

export const buttonHandler = e => {
  let target = e.target;
  if (target.tagName !== 'BUTTON') return;
  switch (target.id) {
    case 'run':
      route();
      break;
    case 'clear':
      clearTemplate();
      createTemplate();
      break;
    case "generate":
      clearTemplate();
      createTemplate();
      createMaze();
      break;
  }
};
