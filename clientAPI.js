const myHeaders = new Headers();
myHeaders.append("x-api-key", "api_key=live_Y4We77eLPTldRYdJ8VNEom3Kc6fG0c52Zf6ljt7XDDo3NL09E4Ml3e7leRP2OArH");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

document.getElementById('fetch-cat-button').addEventListener('click', function() {
  fetch("https://api.thecatapi.com/v1/images/search?limit=1", requestOptions)
    .then(response => response.json())
    .then(result => {
      const catImageOutput = document.getElementById('cat-image-output');
      catImageOutput.innerHTML = `
        <img src="${result[0].url}" alt="Random Cat">
      `;
    })
    .catch(error => console.log('error', error));
});
