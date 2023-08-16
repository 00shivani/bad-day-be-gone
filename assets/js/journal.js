var cardContainer = document.querySelector(".scroll-ul");

// SELECTING CORRECT ACTIVITY CONTAINER (QUOTES)
cardContainer.addEventListener("click", function(event) {
    var card = event.target;
// redirect to "journal" section of index.html
    if(card.matches("#journal-card")) {
        location.replace("#journal");
    };
});

var viewportTwo = document.getElementById("journal");
var journalName = document.getElementById("journalName");
var date = document.getElementById("journalDate");
var text = document.getElementById("journalText");
var kanyeDiv = document.getElementById("right2");
var vibes = document.getElementById("vibes-title");
var journalSubmit = document.getElementById("journalSubmit");

// Storage as an object

journalSubmit.addEventListener ("click", function () {
    journalName.remove();
    date.remove();
    // name.remove();
    text.remove();
    right2.remove();
    vibes.remove();
    var userResponse = {
        journalName: journalName.value,
        date: date.value,
        text: text.value,
    };
    localStorage.setItem("userResponse", JSON.stringify (userResponse));
    console.log(userResponse);


    journalSubmit.remove();
    renderResponse();

    var entriesTitle = document.createElement("h1");
    entriesTitle.textContent = "View Previous Entries:";
    viewportTwo.appendChild(entriesTitle);

    var newEntryTitle = document.createElement("h1");
    newEntryTitle.textContent = "Or, create another entry.";
    viewportTwo.appendChild(newEntryTitle);

var newEntryButton = document.createElement("button");
    newEntryButton.textContent = "New";
    newEntryButton.style = "background-color: yellow;";
    newEntryButton.addEventListener("click", function (event) {
        location.reload("#journal");
    });
    viewportTwo.appendChild(newEntryButton);
});

function renderResponse() {
    var lastResponse = JSON.parse(localStorage.getItem("userResponse"))

    if(lastResponse !== null) {
        var entryDiv = document.createElement("div");
            entryDiv.setAttribute("id", "entryDiv");
        var entryDivTitle = document.createElement("h1");
            entryDivTitle.textContent = lastResponse.journalName;
        var entryDivDate = document.createElement("p");
            entryDivDate.textContent = lastResponse.date;
        
            entryDiv.appendChild(entryDivDate);
            entryDiv.appendChild(entryDivTitle);
            viewportTwo.appendChild(entryDiv);

            entryDiv.addEventListener("click", function (event) {
                var textDiv = document.createElement("p");
                textDiv.textContent = lastResponse.text;
                entryDiv.appendChild(textDiv);
            })
    }
}
