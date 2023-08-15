// Create popup div
var main = document.querySelector("#screen-one");
var carousel = document.querySelector("#carousel");
var scrollDiv = document.querySelector("#scroll-div");
var title = document.querySelector("#web-title");
var subtitle = document.querySelector("#web-subtitle");
var cardContainer = document.querySelector(".scroll-ul");

// SELECTING CORRECT ACTIVITY CONTAINER (FUNNIES)
cardContainer.addEventListener("click", function(event) {
    var card = event.target;
    if(card.matches("#jokes-card")) {
        carousel.remove();
        title.remove();
        subtitle.remove();
        scrollDiv.remove();

        main.appendChild(newFunnies);
    };
});

// NEW CARD CONTAINERS + INNER ELEMENTS:
    var newFunnies = document.createElement("div");
    // PopUp styling
        newFunnies.setAttribute("style", 
        "display: flex; padding: 30px; margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #EF601E; border-radius:20px; color: white;"
        );
    // Separate into two different sections
    var memeFlexDiv = document.createElement("div");
        memeFlexDiv.style = "display: flex; flex-direction: column; border-right: solid 1px white; width: 50%; margin: 0 auto; text-align: center; align-items:center; justify-content: center; padding-right: 15px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200;";
    var jokeFlexDiv = document.createElement("div");
        jokeFlexDiv.style = "display: flex; flex-direction: column; width: 50%; margin: 0 auto; text-align: center; justify-content: center; align-items:center; padding-left: 15px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200;";
    // Append into newFunnies main container
        newFunnies.appendChild(memeFlexDiv);
        newFunnies.appendChild(jokeFlexDiv);

// SEPARATE "newFUNNIES" TITLE CARD INTO 2 SECTIONS
        
// MEME RESPONSE CONTAINER
var memeContainer = document.createElement("div");
    // memes popUp styling
    memeContainer.setAttribute ("style",         
    "margin: 11% 10% auto; width: 80%; height: 60vh;  background-color: #EF601E; border-radius:20px; display: flex;"
    )
    // containers for api responses
    var memeImageContainer = document.createElement("div");
        memeImageContainer.style = "width: 60%;";
    var memeCaptionContainer = document.createElement("div");

// JOKE RESPONSE CONTAINER 
var jokeContainer = document.createElement("div");
    // jokes popup styling
    jokeContainer.setAttribute ("style",         
    "margin: 11% 10% auto; width: 80%; height: 60vh;  background-color: #EF601E; border-radius:20px;"
    )
    // containers for api responses
    var jokeTextContainer = document.createElement("div");

///////////////// MEMES SETUP /////////////////

// Memes - dropdown menu creation
    var memeDropdownTitle = document.createElement("h1");
        memeDropdownTitle.textContent = "Memes";
        memeDropdownTitle.style = "font-size: 50px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200;"
    var memeDropdownSubtitle = document.createElement("p");
        memeDropdownSubtitle.textContent = "select a subreddit from which you want your meme from the dropdown list below!";
        memeDropdownSubtitle.style = "font-size: 20px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200; width: 85%; margin: 10px auto; margin-top: 0;"
    var memeDropdown = document.createElement("select");
        memeDropdown.setAttribute("id", "dropdown");
        memeDropdown.style = "color: gray; margin: 5px auto; width: 60%;"
// Dropdown options
    var option0 = document.createElement("option")
        option0.textContent = "Meme Subreddits";
        option0.setAttribute("disabled", "disabled");
        option0.setAttribute("selected", "selected");
    var option1 = document.createElement("option");
        option1.textContent = "programmerHumor";
    var option2 = document.createElement("option");
        option2.textContent = "wholesomeMemes";
    var option3 = document.createElement("option");
        option3.textContent = "me_irl";
    var option4 = document.createElement("option");
        option4.textContent = "dankMemes";
    var memeGenerate = document.createElement("button");
        memeGenerate.textContent = "click for memes!";
        memeGenerate.style = "margin: 5px auto; background-color: #CFC047; color: white; font-family:'Bricolage Grotesque', sans-serif; width: 200px; height: 35px; border-radius: 20px; padding: 5px";
    memeDropdown.append(option0, option1, option2, option3, option4);
    memeFlexDiv.append(memeDropdownTitle);
    memeFlexDiv.append(memeDropdownSubtitle);
    memeFlexDiv.append(memeDropdown);
    memeFlexDiv.append(memeGenerate);

/////////////// MEMES API - FETCH & APPEND ////////////////
memeGenerate.addEventListener("click", function() {
    jokeContainer.appendChild(back);
    // clear anything remaining in meme container
    memeContainer.innerHTML = "";
    // select a dropdown category
    var memeDropdown = document.getElementById("dropdown");
    var selectedIndex = memeDropdown.selectedIndex;
    var selectedOption = memeDropdown.options[selectedIndex].text;
        console.log(selectedOption);

    // API Request - Memes
    var memesUrl = "https://meme-api.com/gimme/" + selectedOption;

    function getMemes () {
        fetch(memesUrl).then(function (response) {
            if(response.ok) {
                response.json().then(function (data) {
                // test response in console
                    console.log(data);
                // created elements for each object key displayed (image and "p" text)
                    var memeImageUrl = document.createElement("img");   
                    var subreddit = document.createElement("p");
                // set attributes + text content for new images
                    memeImageUrl.setAttribute("src", data.url);
                    subreddit.textContent = "subreddit: " + data.subreddit;
                // set style
                    memeImageUrl.style = "max-width: 250px; max-height: 250px; margin: auto;"
                // append data and new elements to joke container
                    memeImageContainer.appendChild(memeImageUrl);
                    memeCaptionContainer.appendChild(subreddit);
                    memeContainer.appendChild(memeImageContainer);
                    memeContainer.appendChild(memeCaptionContainer);
                    memeContainer.appendChild(back);
                    memeContainer.appendChild(memeButton2);
                // console log url
                    console.log(data.url);
                })
            } else {
                alert ("error" + response.statusText);
            }
        }) .catch (function (error) {
            alert("unable to fetch API");
        });
    }; 
    getMemes();

        // create a button to generate more memes
        var memeButton2 = document.createElement("button");
        memeButton2.setAttribute ("style", 
        "margin: 5px auto; background-color: #CFC047; color: white; font-family:'Bricolage Grotesque', sans-serif; width: 200px; height: 35px; border-radius: 20px; padding: 5px");
        memeButton2.textContent = "generate another meme!";
    // switch to joke display container
    newFunnies.replaceWith(memeContainer);
    // add a "generate more" button
    
    

    // generate more memes function
    memeButton2.addEventListener("click", function() {
        memeImageContainer.innerHTML = "";
        memeCaptionContainer = "";
        getMemes();
    });
});

/////////////////////// JOKES SETUP ///////////////////////

// Search for key words
    var jokeTitle = document.createElement("h1");
        jokeTitle.textContent = "Jokes";
        jokeTitle.style = "font-size: 50px; font-weight: 200; margin: 0 auto;";
    var jokeSubtitle = document.createElement("p");
        jokeSubtitle.textContent = "Search for a joke by key word,";
        jokeSubtitle.style = "font-size: 17px;";
    var jokeSearch = document.createElement("input");
        jokeSearch.setAttribute("type", "search");
        jokeSearch.setAttribute("placeholder", "Enter key-word(s)");
        jokeSearch.style = "color: black; width: 60%; margin: 5px;"
    var jokeDropdownTitle = document.createElement("p");
        jokeDropdownTitle.textContent = "or, select a category from the drop-down menu below!";
        jokeDropdownTitle.style = "font-size: 17px;";
    var searchGenerate = document.createElement("button");
        searchGenerate.textContent = "jokes by key-word!";
        searchGenerate.style = "margin: 5px auto; background-color: #CFC047; color: white; font-family:'Bricolage Grotesque', sans-serif; width: 200px; height: 35px; border-radius: 20px; padding: 5px";
// Use dropdown to select a category
    var jokeDropdown = document.createElement("select");
            jokeDropdown.style = "color: gray; width: 60%; margin: 5px;"
        jokeDropdown.setAttribute("id", "jokeDropdown");
        jokeDropdown.setAttribute("placeholder", "Joke Categories");
// Dropdown options
    var category0 = document.createElement("option")
        category0.textContent = "Joke Categories";
        category0.setAttribute("disabled", "disabled");
        category0.setAttribute("selected", "selected");
    var category1 = document.createElement("option");
        category1.textContent = "clean";
    var category2 = document.createElement("option");
        category2.textContent = "school";
    var category3 = document.createElement("option");
        category3.textContent = "political";
    var category4 = document.createElement("option");
        category4.textContent = "dark";
    var category5 = document.createElement("option");
        category5.textContent = "sport";
    var category6 = document.createElement("option");
        category6.textContent = "animal";
    var category7 = document.createElement("option");
        category7.textContent = "analogy";
    var category8 = document.createElement("option");
        category8.textContent = "food";
    var category9 = document.createElement("option");
        category9.textContent = "relationship";
    var category10 = document.createElement("option");
        category10.textContent = "holiday";
// Generate button
    var dropdownGenerate = document.createElement("button");
        dropdownGenerate.textContent = "jokes by category!";
        dropdownGenerate.style = "margin: 5px auto; background-color: #CFC047; color: white; font-family:'Bricolage Grotesque', sans-serif; width: 200px; height: 35px; border-radius: 20px; padding: 5px";
// append everything
    jokeDropdown.append(category0, category1, category2, category3, category4, category5, category6, category7, category8, category9, category10);
    jokeFlexDiv.append(jokeTitle);
    jokeFlexDiv.append(jokeSubtitle);
    jokeFlexDiv.append(jokeSearch);
    jokeFlexDiv.append(searchGenerate);
    jokeFlexDiv.append(jokeDropdownTitle);
    jokeFlexDiv.append(jokeDropdown);
    jokeFlexDiv.append(dropdownGenerate);

///////////// JOKES API - FETCH & APPEND ////////////////

searchGenerate.addEventListener("click", function (event) {
    var keyWord = jokeSearch.value;
    console.log(keyWord);

    var currentIndex = 0; // Initialize current index for jokes
    var nextButton = document.createElement("button");
    nextButton.setAttribute ("style", 
    " margin: 0 auto; width: 60%; height: 30px; color: white; background-color: purple; border-radius: 20px; cursor: pointer; position: relative; top: 80%;");
    nextButton.textContent = 'View another joke about "' + keyWord + '!"';
    jokeContainer.appendChild(nextButton);

    var jokesByKeyWordUrl = "https://api.humorapi.com/jokes/search?api-key=2ef04b1aeb464efd8db46e95248cc885&number=10&keywords=" + keyWord;

    function initJokes(jokesArray) {
        var jokeTextContainer = document.createElement("div"); // Create a container for joke text
            jokeTextContainer.setAttribute("style", "padding: 30px; margin: 0 auto; max-width: 80%; max-height: 50%; overflow-y: scroll;");
        jokeContainer.appendChild(jokeTextContainer);

        function displayJoke() {
            jokeTextContainer.textContent = "Joke " + (currentIndex + 1) + ": " + jokesArray[currentIndex].joke;
        };

        nextButton.addEventListener("click", function (event) {
            currentIndex = (currentIndex + 1) % jokesArray.length;
            displayJoke();
        });

        displayJoke();
    }

    function getJokesByKeyWord() {
        fetch(jokesByKeyWordUrl, {
            method: "GET"
        })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);

                    var keyWordText = document.createElement("h1");
                    keyWordText.textContent = "Enjoy 10 jokes about " + '"' + keyWord + '"' + ": ";
                    jokeContainer.appendChild(keyWordText);
                    jokeContainer.appendChild(back);
                    var jokesArray = data.jokes;
                    initJokes(jokesArray);
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            console.log("Unable to connect to API.");
        });
    }

    getJokesByKeyWord();
    newFunnies.replaceWith(jokeContainer);
});

///////////////////// get jokes by category fetch & append 

dropdownGenerate.addEventListener("click", function (event) {
   
    var jokeDropdown = document.getElementById("jokeDropdown");
    var selectedIndex = jokeDropdown.selectedIndex;
    var selectedOption = jokeDropdown.options[selectedIndex].text;
    console.log(selectedOption);

    var currentIndex = 0; // Initialize current index for jokes
        var nextJokeButton = document.createElement("button");
            nextJokeButton.setAttribute ("style", 
            " margin: 0 auto; width: 60%; height: 30px; color: white; background-color: purple; border-radius: 20px; cursor: pointer; position: relative; top: 80%;");
            nextJokeButton.textContent = 'View another joke about "' + selectedOption + '!"';
            jokeContainer.appendChild(nextJokeButton);
    jokeContainer.appendChild(back);

    var jokesByCategoryUrl = "https://api.humorapi.com/jokes/search?api-key=2ef04b1aeb464efd8db46e95248cc885&number=10&category=" + selectedOption;

    function initJokes(categoryJokesArray) {
        var jokeTextContainer = document.createElement("div"); // Create a container for joke text
        jokeTextContainer.setAttribute("style", "padding: 30px; margin: 0 auto; max-width: 80%; max-height: 50%; overflow-y: scroll;");
        jokeContainer.appendChild(jokeTextContainer);

        function displayCategoryJoke() {
            jokeTextContainer.textContent = "Joke " + (currentIndex + 1) + ": " + categoryJokesArray[currentIndex].joke;
        }

        nextJokeButton.addEventListener("click", function (event) {
            currentIndex = (currentIndex + 1) % categoryJokesArray.length;
            displayCategoryJoke();
        });

        displayCategoryJoke();
    }

    function getJokesByCategory() {
        fetch(jokesByCategoryUrl, {
            method: "GET"
        })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);

                    var categoryText = document.createElement("h1");
                    categoryText.textContent = "Enjoy 10 jokes about " + '"' + selectedOption + '"' + ": ";
                    jokeContainer.appendChild(categoryText);
                    jokeContainer.appendChild(back);

                    var categoryJokesArray = data.jokes;
                    initJokes(categoryJokesArray);
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            console.log("Unable to connect to API.");
        });
    }

    getJokesByCategory();
    newFunnies.replaceWith(jokeContainer);
});

        
/////////////////////// BACK BUTTON ////////////////////////// 

// created a "back" button element
var back = document.createElement("button");
back.setAttribute(
    "style", 
    "width: 100px; height: 30px; background-color: yellow; border-radius: 20px;"
);
// listening for back click event, then redirect to original card-container
back.addEventListener("click", function () {
    jokeContainer.replaceWith (newFunnies);
    memeContainer.replaceWith (newFunnies);
});

/////////////////////// CANCEL BUTTON ////////////////////////// 

// created an "close" button element
var cancel = document.createElement("button");
    cancel.style = "width: 100px; height: 30px; background-color: red; border-radius: 20px;";
// listening for close click event, then redirect to homepage
cancel.addEventListener("click", function(event){
    location.href = 'index.html';
});
// attached close button to pop-up div
newFunnies.appendChild(cancel);
