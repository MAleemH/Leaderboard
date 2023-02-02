import { url } from './api.js';
const scoreCard = document.querySelector('#scoreCard');

const getScores = async () => {
  const fetchScores = await fetch(url);
  const allData = await fetchScores.json();
  const output = allData.result;
  return output;
}

const displayScores = async () => {
  const allScores = await getScores();
  scoreCard.innerHTML = '';
  allScores.forEach(data => {
    scoreCard.innerHTML += `
    <tr>
        <td>${data.user}: ${data.score}</td>
    </tr>
    `;
  });
}

export default displayScores;