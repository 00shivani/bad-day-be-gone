var quoteNameEl = document.querySelector('#zenquote.io')
var zenquoteEl = document.querySelector('#zen-quote')
var needMoreZenEl = document.querySelector('#needMoreZen')

var getQuote = function () {
    var queryString = document.location.search;
    var quoteName = queryString.split('=')[1];

    if (quoteName) {
        quoteNameEl.textContent = quoteName;
        getQuoteNow();
    } else {
        document.location.replace('./index.html');
    }
};

var getQuoteNow = function () {
    var apiUrl = 'https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value';

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayQuotes(data);
            });
        } else {
            document.location.replace('./index.html')
        }
    });
};

function displayQuotes(data) {
    zenquoteEl.textContent = data[0].q;
}

var quoteIssues = function(data) {
    if (quoteIssues.length === 0) {
        quoteContainerEl.textContent = '(Issue)';
        return;
    }
    for (var i = 0; i < quotes.length; i++) {
        var quoteEl = document.createElement('a');
        quoteEl.classlist = 'justify-space-between align-center';
        quoteEl.setAttribute('href', quotes[i].html_url);
        quoteEl.setAttribute('target', '_blank');

        var  typeEl = document.createElement('span');

        if (quotes[i].pull_request) {
            typeEl.textContent = '(pull request)';
        } else {
            typeEl.textContent = '(Issue)';
        }
    quoteEl.appendChild(typeEl);
    quoteContainerEl.appendChild(issueEl);
    }
};

var displayWarning = function (quote) {
    needMoreZenEl.textContent= 'Rough day need more zen in your life? visit ';

    var linkEl = document.createElement('a');
    linkEl.textContent = 'http://zenquotes.io'
    linkEl.setAttribute('href', 'http://zenquotes.io' + quote + '/quotes');
    linkEl.setAttribute('target', '_blank');

    needMoreZenEl.appendChild(linkEl);
};
getQuoteNow();