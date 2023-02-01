const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bAk6Dqse7a5TBFyArmuy/scores/';

const addNewScore = async (newScore) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  nameInput.value = '';
  scoreInput.value = '';
  return newScore;
}

export default addNewScore;