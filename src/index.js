import addNewScore from './modules/addScore.js';
import displayScores from './modules/displayAllScores.js';
import './index.css';

const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');
const formButton = document.querySelector('#formButton');
const refreshButton = document.querySelector('#refreshButton');

window.addEventListener('load', () => {
  displayScores();
});

formButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (nameInput.value !== '' || scoreInput.value !== '') {
    addNewScore();
  }
});

refreshButton.addEventListener('click', async () => {
  displayScores();
});