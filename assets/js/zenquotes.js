var api = "https://zenquotes.io/api/image/random/";
var zenQuoteEl = document.querySelector('#zen-quote-button');

function fetchQuote() {
    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayQuotes(data);
        })
        .catch(function(error) {
            console.error('Error fetching quotes:', error);
        });
}

function displayQuotes(data) {
    var quoteContainerEl = document.querySelector('#quote-container');

    for (var i = 0; i < data.length; i++) {
        var quoteEl = document.createElement('div');
        quoteEl.classList.add('quote');
        quoteEl.textContent = data[i].q;

        quoteContainerEl.appendChild(quoteEl);
    }
}

zenQuoteEl.addEventListener('click', function() {
    fetchQuote();
});

fetchQuote();
