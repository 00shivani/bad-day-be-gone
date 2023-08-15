
var cardContainer = document.querySelector(".scroll-ul");

// SELECTING CORRECT ACTIVITY CONTAINER (QUOTES)
cardContainer.addEventListener("click", function(event) {
    var card = event.target;
// redirect to "journal" section of index.html
    if(card.matches("#journal-card")) {
        location.replace("#journal");
    };
});