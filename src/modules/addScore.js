import { url } from './api.js';

const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');

const addNewScore = async () => {
  const result = fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
  });
  nameInput.value = '';
  scoreInput.value = '';
  const apiResult = await result.json;
  return apiResult;
}

export default addNewScore;