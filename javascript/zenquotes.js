// used a normal fetch command for the Zenquotes Api.
// used RUT-VIRT-FSF...

var api = "https://zenquotes.io/api/image/random/"
var quoteNameEl = document.querySelector('#zenquote.io');
var zenQuoteEl = document.querySelector('#zen-quote-button');

fetch('https://zenquotes.io/api/image/random/', {
    method: 'GET',
    // We were getting CORS issues so adding this line should fix it.
    mode: 'no-cors',
    cedentials: 'same-origin',
    redirect: 'follow',
})
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

function displayQuotes(data) {
    zenQuoteEl.textContent = data[0].q;
}
 var quoteIssues = function(data) {
    if (quoteIssues.length !== 0) {
        quoteContainerEl.textContent = '("Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water.")'
    }
 }   
    for (var i = 0; i < data.length; i++) {
        var quoteEl = document.createElement('a');
        quoteEl.classlist = 'justify-space-between align-center';
        quoteEl.setAttribute('href', quotes[i].html_url);
        quoteEl.setAttribute('target', '_blank');

        var typeEl = document.createElement('span')

        if (quotes[i].pull_request) {
            typeEl.textContent = '(pull request)'
        } else {
            typeEl.textContent = "(Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water.)";
        }
    quoteEl.appendChild(typeEl);
    quoteContainerEl.appendChild(issueEl);
    }
    displayQuotes();

zenQuoteEl.addEventListener('click', buttonClickHandler);