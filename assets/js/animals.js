/* Script Index */
///// Section 1: "Elements / API prep" --> Go to line 9
///// Section 2: "API fetch & append" --> Go to line 87
///////////// 2a. Dogs API --> line 87
///////////// 2b. Kittens API --> line 134
///////////// 2c. Birds API --> line 171
///// Section 3: "Div navigation buttons" --> Go to line 211 (last button) & line 226 (close button)

var main = document.querySelector("#screen-one");
var carousel = document.querySelector("#carousel");
var scrollDiv = document.querySelector("#scroll-div");
var title = document.querySelector("#web-title");
var subtitle = document.querySelector("#web-subtitle");
var cardContainer = document.querySelector(".scroll-ul");

//////////// SELECTING CORRECT CONTAINER (ANIMALS) ////////////// 
cardContainer.addEventListener("click", function(event) {
    var card = event.target;

    if(card.matches("#animals-card")) {
        carousel.style.display = "none";
        title.style.display = "none";
        subtitle.style.display = "none";
        scrollDiv.style.display = "none";

        main.appendChild(newAnimals);
    };
});

////////////// NEW POP-UP DIV/ CONTAINER CREATED //////////////// 
var newAnimals = document.createElement("div");
    // PopUp container styling
    newAnimals.setAttribute(
        "style", 
        "display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #CAAACD; border-radius:20px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 200;");
var newAnimalsTitle = document.createElement("h1");
    newAnimalsTitle.textContent = "Generate Animal Pics!";
    newAnimalsTitle.style = "color: white; font-size: 40px;"
    newAnimals.appendChild (newAnimalsTitle);

///////////// DOGS API - NEW ELEMENTS AND STYLING /////////////// 
var dogContainer = document.createElement("div");
    // dog div styling
    dogContainer.setAttribute ("style", 
    "margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #CAAACD; border-radius:20px;")
    // container for dog images
var dogImageContainer = document.createElement("div");
    dogContainer.appendChild(dogImageContainer);
var dogButton = document.createElement("button");
    // dogButton Styling
    dogButton.setAttribute (
        "style", 
        "width: 95%;height: 50px;color: black; background-color: #FDE9FF;border-radius: 20px; cursor: pointer; margin: 10px;");
    dogButton.textContent = "Dogs 🐶";
    newAnimals.appendChild(dogButton);

///////////// KITTENS API - NEW ELEMENTS AND STYLING ///////////////// 
var kittenContainer = document.createElement("div");
    // kitten div styling
    kittenContainer.setAttribute ("style", 
    "margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #CAAACD; border-radius:20px;")
// container for kitten images
var kittenImageContainer = document.createElement("div");
    kittenContainer.appendChild(kittenImageContainer);
var kittenButton = document.createElement("button");
    // kittenButton Styling
    kittenButton.setAttribute (
        "style", 
        "width: 95%;height: 50px;color: black; background-color:#FDE9FF;border-radius: 20px; cursor: pointer; margin: 10px;");
    kittenButton.textContent = "Cats 🐱";
    newAnimals.appendChild(kittenButton);  

/////////////// BIRDS API - NEW ELEMENTS AND STYLING ////////////////// 
var birdContainer = document.createElement("div");
    // bird div styling
    birdContainer.setAttribute ("style", 
    "margin: 11% 10% auto; width: 80%; height: 60vh; background-color: #CAAACD; border-radius:20px;")
// container for bird images
var birdImageContainer = document.createElement("div");
    birdContainer.appendChild(birdImageContainer);
var birdButton = document.createElement("button");
    // birdButton Styling
    birdButton.setAttribute (
        "style", 
        "width: 95%;height: 50px;color: black; background-color: #FDE9FF;border-radius: 20px; cursor: pointer; margin: 10px;");
    birdButton.textContent = "Birds 🐦";
    newAnimals.appendChild(birdButton);

///////////////////// DOGS - FETCHING & APPENDING ////////////////////
// created second button for generating more images
var dogButton2 = document.createElement("button");
    dogButton2.setAttribute ("style", 
    "width: 100%;height: 50px;color: white; background-color: var(--orange);border-radius: 20px; cursor: pointer; margin-top: 30px;");
    dogButton2.textContent = "Generate another dog!";

// listening for "click" events on the "dog" button
dogButton.addEventListener("click", function () {
// clear any remaining images
    dogImageContainer.innerHTML = "";
// appending "last" button to the "dogContainer" element
    dogContainer.appendChild(last);
    var dogsURL = "https://dog.ceo/api/breeds/image/random";
// made fetch request
    function fetchDogs () {
        fetch(dogsURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    var imageUrl = document.createElement("img");
                    imageUrl.setAttribute("src", data.message);
                    imageUrl.style = "margin: auto; max-width: 200px; max-height: 200px;"
                    dogImageContainer.appendChild(imageUrl);
                    console.log(data.message);
            });
            } else {
                alert ('error' + response.statusText);
            }
            })
            .catch (function (error){
                alert('Unable to fetch API');
            })
        };
// appending to HTML
    newAnimals.replaceWith(dogContainer);
    dogContainer.appendChild(dogButton2);                
// generate more pics
    dogButton2.addEventListener("click", function() {
        dogImageContainer.innerHTML = "";
        
        fetchDogs();
    });
    fetchDogs();
});

///////////////// KITTENs - FETCHING & APPENDING //////////////////// 
// created second button for generating more images
var kittenButton2 = document.createElement("button");
    kittenButton2.setAttribute ("style", 
    "width: 100%;height: 50px;color: white; background-color: var(--orange);border-radius: 20px; cursor: pointer; margin-top: 30px;");
    kittenButton2.textContent = "Generate another kitten!";

// listening for "click" events on the "kitten" button
kittenButton.addEventListener("click", function () {
// clear any remaining images
    kittenImageContainer.innerHTML = "";
// appending "last" button to the "kittenContainer" element
    kittenContainer.appendChild(last);

    var kittenUrl = "https://placekitten.com/200/200";

// made api fetch request
    function fetchKittens () {
        fetch(kittenUrl).then (function (response) {
            console.log(response.url);
// appending to html
            var kittenImageUrl = document.createElement("img");
            kittenImageUrl.setAttribute("src", response.url);
            kittenImageUrl.style = "margin: auto; max-width: 200px;"
            kittenImageContainer.appendChild(kittenImageUrl);
    })};
// appending to HTML
    newAnimals.replaceWith(kittenContainer);
    kittenContainer.appendChild(kittenButton2);                
// generate more pics
    kittenButton2.addEventListener("click", function() {
        kittenImageContainer.innerHTML = "";
        fetchKittens();
        });
        fetchKittens();
});

///////////////////// BIRDS - FETCHING & APPENDING ///////////////////
// created second button for generating more images
var birdButton2 = document.createElement("button");
    birdButton2.setAttribute ("style", 
    "width: 100%;height: 50px;color: white; background-color: var(--orange);border-radius: 20px; cursor: pointer; margin-top: 30px;");
    birdButton2.textContent = "Generate another bird!";

// listening for "click" events on the "bird" button
birdButton.addEventListener("click", function () {
// clear any remaining images
    birdImageContainer.innerHTML = "";
// appending "last" button to the "birdContainer" element
    birdContainer.appendChild(last);
    var birdUrl = "http://shibe.online/api/birds?count=1&urls=true";
// api fetch request function
    function fetchBirds () {
        fetch(birdUrl).then (function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data[0]);
                    var birdImageUrl = document.createElement("img");
                    birdImageUrl.setAttribute("src", data[0]);
                    birdImageUrl.style ="margin: auto; max-width: 200px;"
                    birdImageContainer.appendChild(birdImageUrl);
            })}
        })
    } 
// appending to HTML
    newAnimals.replaceWith(birdContainer);
    birdContainer.appendChild(birdButton2);                
// generate more pics
    birdButton2.addEventListener("click", function() {
        birdImageContainer.innerHTML = "";
        
        fetchBirds();
    });
    fetchBirds();
});
        
/////////////////////// last BUTTON ////////////////////////// 

// created a "last" button element
var last = document.createElement("button");
last.setAttribute(
    "style", 
    "width: 100px; height: 30px; background-color: yellow; border-radius: 20px;"
);


// listening for close click event, then redirect to original card-container
last.addEventListener("click", function () {
    dogContainer.replaceWith (newAnimals);
    kittenContainer.replaceWith (newAnimals);
    birdContainer.replaceWith (newAnimals);
});

/////////////////////// close BUTTON ////////////////////////// 

// created an "close" button element
var close = document.createElement("button");
    close.setAttribute("style", 
    "width: 100px; height: 30px; background-color: red; border-radius: 20px;"
    );
// listening for close click event, then redirect to homepage
close.addEventListener("click", function(event){
    location.href = 'index.html';
});
// attached close button to pop-up div
newAnimals.appendChild(close);



