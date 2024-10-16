// Function to generate character
function generateCharacter(prompt) {
  const raw = JSON.stringify({ prompt: prompt });
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer lmwr_sk_jtWuy90JMn_S7QmQzJk4RJoaphUNMxR2rcHOGnttSJAgRy7V");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.limewire.com/api/image/generation", requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(result => {
      console.log(result);
      const requestId = result.request_id; // Ensure the response contains the request_id
      pollRequest(requestId);
    })
    .catch(error => console.error('Error:', error));
}

// Function to poll the GET request
function pollRequest(requestId) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer lmwr_sk_jtWuy90JMn_S7QmQzJk4RJoaphUNMxR2rcHOGnttSJAgRy7V");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`https://api.limewire.com/api/image/generation/${requestId}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const characterOutput = document.getElementById('character-output');
      characterOutput.innerHTML = `
        <h2>Generated Character</h2>
        <img src="${result.image}" alt="Generated Character">
      `;
    })
    .catch(error => console.error('Error:', error));
}

// Event listener for character form submission
document.getElementById('character-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const prompt = document.getElementById('prompt').value;
  generateCharacter(prompt);
});
