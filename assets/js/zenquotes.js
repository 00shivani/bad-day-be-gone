categoriesUrl = 'https://famous-quotes4.p.rapidapi.com/'; //BASE URL NO PARAMS
quotesUrl = 'https://famous-quotes4.p.rapidapi.com/random?'; //BASE URL NO PARAMS
// Complete quotesUrl: 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2'

card = document.getElementById('quoteCard').addEventListener("click", popupDiv(), false);
cardEl = document.createElement('div');

function popupDiv(event) {
    if (event == "click") {
        window.alert("You touched the screen!");
    }
};


categoriesUrl = fetch('https://famous-quotes4.p.rapidapi.com/', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8dc8ef7afbmsh33b2987a92c5956p1cc770jsncd8dd785bb33',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
        console.log(data);
})


var quotesUrl = fetch ('https://famous-quotes4.p.rapidapi.com/random?category=' + category + '&count=' + number, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8dc8ef7afbmsh33b2987a92c5956p1cc770jsncd8dd785bb33',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
})
.then (function (response) {
    return response.json();
})
.then (function (data) {
    console.log(data);
});



// try {
// 	var response = await fetch(url, options);
// 	var result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// var quoteNameEl = document.querySelector('#zenquote.io')
// var zenquoteEl = document.querySelector('#zen-quote')
// var needMoreZenEl = document.querySelector('#needMoreZen')

// var getQuote = function () {
//     var queryString = document.location.search;
//     var quoteName = queryString.split('=')[1];

//     if (quoteName) {
//         quoteNameEl.textContent = quoteName;
//         getQuoteNow();
//     } else {
//         document.location.replace('./index.html');
//     }
// };

// var getQuoteNow = function () {
//     var apiUrl = 'https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value';

//     fetch(apiUrl + '{mode: "no-cors"}').then(function (response) {
//         if (response.ok) {
//             response.json().then(function(data) {
//                 displayQuotes(data);
//                 console.log(response);
//             });
//         } else {
//             document.location.replace('./index.html')
//         }
//     });
// };

// function displayQuotes(data) {
//     zenquoteEl.textContent = data[0].q;
// }

// var quoteIssues = function(data) {
//     if (quoteIssues.length === 0) {
//         quoteContainerEl.textContent = '(Issue)';
//         return;
//     }
//     for (var i = 0; i < quotes.length; i++) {
//         var quoteEl = document.createElement('a');
//         quoteEl.classlist = 'justify-space-between align-center';
//         quoteEl.setAttribute('href', quotes[i].html_url);
//         quoteEl.setAttribute('target', '_blank');

//         var  typeEl = document.createElement('span');

//         if (quotes[i].pull_request) {
//             typeEl.textContent = '(pull request)';
//         } else {
//             typeEl.textContent = '(Issue)';
//         }
//     quoteEl.appendChild(typeEl);
//     quoteContainerEl.appendChild(issueEl);
//     }
// };

// var displayWarning = function (quote) {
//     needMoreZenEl.textContent= 'Rough day need more zen in your life? visit ';

//     var linkEl = document.createElement('a');
//     linkEl.textContent = 'http://zenquotes.io'
//     linkEl.setAttribute('href', 'http://zenquotes.io' + quote + '/quotes');
//     linkEl.setAttribute('target', '_blank');

//     needMoreZenEl.appendChild(linkEl);
// };
// getQuoteNow();