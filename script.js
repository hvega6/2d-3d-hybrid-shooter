document.getElementById('character-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const characterName = document.getElementById('character-name').value;
  generateCharacter(characterName);
});

function generateCharacter(name) {
  const prompt = `Create a character named ${name}`;
  const raw = JSON.stringify({ prompt: prompt });
  const requestOptions = {
    method: 'POST',
    body: raw,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'key 5503a2be-8a37-4319-8ce9-d7dd552b1434:9f2ca6fb7a64286973d2f4deb87ef2fd'
    }
  };

  fetch("https://queue.fal.run/fal-ai/flux-pro/v1.1", requestOptions)
    .then(response => response.json())
    .then(data => {
      const characterOutput = document.getElementById('character-output');
      characterOutput.innerHTML = `
        <h2>${name}</h2>
        <img src="${data.image}" alt="${name}">
      `;
    })
    .catch(error => console.log('error', error));
}
let myHeaders = new Headers();
myHeaders.append("Authorization", "Key 5503a2be-8a37-4319-8ce9-d7dd552b1434:9f2ca6fb7a64286973d2f4deb87ef2fd");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://queue.fal.run/fal-ai/flux-pro/requests/45aa7afe-098e-4fb7-8617-b3e386bcc824", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));