import addNewScore from './modules/addScore.js';
import './index.css';

const myAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bAk6Dqse7a5TBFyArmuy/scores/';

const formData = document.querySelector('#formData');
const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');

formData.addEventListener('submit', (e) => {
  e.preventDefault();

  if(nameInput.value !== '' || scoreInput.value !== ''){
    addNewScore(myAPI);
  }
});