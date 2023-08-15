/* Script Index */
///// Section 1: "Selecting and creating elements" --> Go to line 8
///// Section 2: "Creating button elements" --> Go to line 46
///// Section 3: "Targetting specific category" --> Go to line 87 
///// Section 4: "API fetch & append" --> Go to line 103 
///// Section 5: "div navigation buttons" --> Go to line 157 (previous button) & line 170 (exit button)

// Create popup div
var main = document.querySelector("#screen-one");
var carousel = document.querySelector("#carousel");
var scrollDiv = document.querySelector("#scroll-div");
var title = document.querySelector("#web-title");
var subtitle = document.querySelector("#web-subtitle");
var cardContainer = document.querySelector(".scroll-ul");


// SELECTING CORRECT ACTIVITY CONTAINER (QUOTES)
cardContainer.addEventListener("click", function(event) {
    var card = event.target;

    if(card.matches("#quotes-card")) {
        carousel.remove();
        title.remove();
        subtitle.remove();
        scrollDiv.remove();

        main.appendChild(newQuotes);
    };
});

// NEW CARD CONTAINERS + INNER ELEMENTS:
var newQuotes = document.createElement("div");
    // PopUp styling
    newQuotes.setAttribute(
        "style", 
        "margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #E9B149; border-radius:20px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200;"
        );
    // Added a new container to replace the categories screen and display quote
    var quoteContainer = document.createElement("div");
    // quote popUp styling
    quoteContainer.setAttribute ("style",         
    "margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #E9B149; border-radius:20px; font-family: 'PT Serif', serif;")
    // container for quote text
    var quoteTextContainer = document.createElement("div");
        quoteContainer.appendChild(quoteTextContainer);

// BUTTONS //
// Card title
    var quotesTitle = document.createElement("h1");
    quotesTitle.textContent = "Quotes";
    quotesTitle.style = "flex-basis: 2; font-size: 50px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200; color: white; text-align: center; margin-top: 10px; margin-bottom: -10px;"
    newQuotes.appendChild(quotesTitle);
// Create Buttons
    var inspirationalBtn = document.createElement ("button");
    var funnyBtn = document.createElement ("button");
    var loveBtn = document.createElement ("button");
    var wisdomBtn = document.createElement ("button");
    var courageBtn = document.createElement ("button");
    var lifeBtn = document.createElement ("button");
// Style the buttons
    newQuotes.style.display = "flex; flex-direction: column;";
    inspirationalBtn.style = "width: 45%; height: 50px; color: black; background-color: #FBFD9A; border-radius: 20px; cursor: pointer; margin: 10px; margin-left:25px; margin-top: 25px;";
    funnyBtn.style = "width: 45%; height: 50px; color: black; background-color: #FBFD9A; border-radius: 20px; cursor: pointer; margin: 10px; margin-left:25px; margin-top: 15px;";
    loveBtn.style = "width: 45%; height: 50px; color: black; background-color: #FBFD9A; border-radius: 20px; cursor: pointer; margin: 10px; margin-left:25px; margin-top: 15px;";
    wisdomBtn.style = "width: 45%; height: 50px;color: black; background-color: #FBFD9A; border-radius: 20px; cursor: pointer; margin: 10px; margin-left:25px; margin-top: 15px;";
    courageBtn.style = "width: 45%; height: 50px;color: black; background-color: #FBFD9A; border-radius: 20px; cursor: pointer; margin: 10px; margin-left:25px; margin-top: 15px;";
    lifeBtn.style = "width: 45%; height: 50px;color: black; background-color: #FBFD9A; border-radius: 20px; cursor: pointer; margin: 10px; margin-left:25px; margin-top: 15px;";
// Button text content
    inspirationalBtn.textContent = "inspirational";
    funnyBtn.textContent = "funny";
    loveBtn.textContent = "love";
    wisdomBtn.textContent = "wisdom";
    courageBtn.textContent = "courage";
    lifeBtn.textContent = "life";
// Append buttons to page
    newQuotes.appendChild(inspirationalBtn);
    newQuotes.appendChild(funnyBtn);
    newQuotes.appendChild(loveBtn);
    newQuotes.appendChild(wisdomBtn);
    newQuotes.appendChild(courageBtn);
    newQuotes.appendChild(lifeBtn);

// created second button for generating more quotes
var quoteButton2 = document.createElement("button");
    // button styling
    quoteButton2.setAttribute ("style", 
    "width: 100%;height: 50px;color: white; background-color: purple;border-radius: 20px; cursor: pointer; position: relative; top: 30%;");
    // button text
    quoteButton2.textContent = "Generate another quote!";

// targetting which button/ category was selected
newQuotes.addEventListener("click", function(event) {
// distinguish which category button was selected. 
    var element = event.target;
    console.log(element);

    if (element.matches ("button")) {
        var label = element.textContent;
        console.log(label);
    } 
    else {return false}; 
    var category = label;
// clear any remaining text from the quote text container
    quoteTextContainer.innerHTML = "";
// appending "previous" button to the "quoteContainer" element
    quoteContainer.appendChild(previous);

/////////////////////// FETCH & APPEND: QUOTES ////////////////////////// 
// API url: 
    var apiUrl = "https://famous-quotes4.p.rapidapi.com/random?category=" + category + "&count=1"
// fetch quotes function
    function getQuotes() {
        fetch (apiUrl, {
            method: 'GET', 
            headers: {
                'X-RapidAPI-Key': '8dc8ef7afbmsh33b2987a92c5956p1cc770jsncd8dd785bb33',
                'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
            }
        })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                    // Test response in console
                        console.log(data);
                    // Create elements for each object key
                        var displayCategory = document.createElement("p");
                        var displayQuote = document.createElement("h2");
                        var displayAuthor = document.createElement("p");
                    // Add text content to each element    
                        displayQuote.textContent = (data[0].text);
                        displayAuthor.textContent = (data[0].author);
                        displayCategory = (data[0].category);
                    // Append text to div
                        quoteTextContainer.appendChild(displayQuote);
                        quoteTextContainer.appendChild(displayAuthor);
                        quoteTextContainer.appendChild(displayCategory);
                        console.log(data);
                    })
                } else {
                    alert('Error: ' + response.statusText);
                }
            })
            .catch(function (error) {
                console.log('Unable to connect to API');
            });
    }
    getQuotes();

    // appending to original container
    newQuotes.replaceWith(quoteContainer);
    // appending the "generate more" button to quotes container
    quoteContainer.appendChild(quoteButton2);

    // clearing previous text when the generate more button is clicked.
    quoteButton2.addEventListener("click", function() {
        quoteTextContainer.innerHTML="";
        // calling function to fetch API response again
        getQuotes();
    });
});

/////////////////////// PREVIOUS BUTTON ////////////////////////// 

// created a "previous" button element
var previous = document.createElement("button");
previous.setAttribute(
    "style", 
    "width: 100px; height: 30px; background-color: yellow; border-radius: 20px;"
);
// listening for exit click event, then redirect to original card-container
previous.addEventListener("click", function (event) {
    quoteContainer.replaceWith (newQuotes);
});

//////////////////// EXIT BUTTON ///////////////////// 

// created an "exit" button element
var exit = document.createElement("button");
    exit.setAttribute("style", 
    "width: 100px; height: 30px; background-color: red; border-radius: 20px;"
    );
    newQuotes.appendChild(exit);
// listening for exit click event, then redirect to homepage
exit.addEventListener("click", function(event){
    location.href = 'index.html';
});
