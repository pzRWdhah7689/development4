// Fetch data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('h1').textContent = data.title;
        document.querySelector('#content p').textContent = data.message;
        document.querySelector('#clickButton').textContent = data.buttonText;
    })
    .catch(error => console.error('Error loading JSON data:', error));
