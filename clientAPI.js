let raw = "";

let requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://queue.fal.run/fal-ai/flux/dev?Authorization=key 5503a2be-8a37-4319-8ce9-d7dd552b1434:9f2ca6fb7a64286973d2f4deb87ef2fd", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// Function to fetch characters
function fetchCharacters() {
  fetch("https://your-api-endpoint.com/characters") // Update with your actual endpoint
    .then(response => response.json())
    .then(data => {
      const characterList = document.getElementById('character-list');
      characterList.innerHTML = ''; // Clear existing characters
      data.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <p>${character.name}</p>
          <button onclick="selectCharacter('${character.id}')">Select</button>
        `;
        characterList.appendChild(characterDiv);
      });
    })
    .catch(error => console.log('error', error));
}

// Call fetchCharacters on page load
fetchCharacters();

// Function to handle character selection
function selectCharacter(characterId) {
  console.log(`Character selected: ${characterId}`);
  // Add your logic for what happens when a character is selected
}

// Function to create a character
function createCharacter(name) {
  if (document.querySelectorAll('.character').length < 2) { // Check if less than 2 characters exist
    const characterDiv = document.createElement('div');
    characterDiv.className = 'character';
    characterDiv.innerHTML = `
      <p>${name}</p>
      <button onclick="removeCharacter(this)">Remove</button>
    `;
    document.getElementById('character-list').appendChild(characterDiv);
  } else {
    alert("You can only create up to 2 characters.");
  }
}

// Function to remove a character
function removeCharacter(button) {
  const characterDiv = button.parentElement;
  characterDiv.remove();
}

// Example usage: create a character with a name
createCharacter("New Character");
