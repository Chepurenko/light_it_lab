import {gebi} from './js/const';
import {cellHandler, buttonHandler, windowLoad} from './js/events';
import {createMaze} from './js/maze'
import './maze.css'
window.onload = windowLoad();
gebi('maze').addEventListener('click', cellHandler);
gebi('buttons-block').addEventListener('click', buttonHandler);
