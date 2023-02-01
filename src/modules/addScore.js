const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');

const addNewScore = async (url) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
  });
  nameInput.value = '';
  scoreInput.value = '';
  return result.JSON();
}

export default addNewScore;