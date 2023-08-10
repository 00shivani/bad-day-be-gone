// - fetches jokes has an API-key
// - https://dadjokes.io/documentation/endpoints/random-jokes

const jokeEl = document.querySelector('#needAJoke');
const jokeContainerEl = document.querySelector('#jokeContainer');

function fetchJoke() {
    fetch(api, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f71f1a918cmshf09aca3db42acafp18d5ffjsna25ce5e83525',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayJoke(data);
    })
    .catch(function(error) {
        console.error('Error fetching joke:', error);
    });
}

function displayJoke(data) {
    var jokeEl = document.createElement('div');
    jokeEl.classList.add('joke');
    jokeEl.textContent = data.content;

    jokeContainerEl.appendChild(jokeEl);
}

jokeEl.addEventListener('click', function() {
    fetchJoke();
});
