import addNewScore from './modules/addScore.js';
import './index.css';

const formData = document.querySelector('#formData');
const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');

formData.addEventListener('submit', (e) => {
  e.preventDefault();

  if(nameInput.value !== '' || scoreInput.value !== ''){
    const newScore = {
      user: nameInput.value,
      score: scoreInput.value,
    }
    addNewScore(newScore);
  }
});