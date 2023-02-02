import addNewScore from './modules/addScore.js';
import displayScores from './modules/displayAllScores.js';
import './index.css';

// const formData = document.querySelector('#formData');
const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');
const formButton = document.querySelector('#formButton');
const refreshButton = document.querySelector('#refreshButton');

window.addEventListener('load', () => {
  displayScores();
});

formButton.addEventListener('click', (e) => {
  e.preventDefault();

  if(nameInput.value !== '' || scoreInput.value !== ''){
    const newScore = {
      user: nameInput.value,
      score: scoreInput.value,
    }
    addNewScore(newScore);
  }
});

refreshButton.addEventListener('click', () => {
  refreshScoreBorad();
});