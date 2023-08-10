// used a getApi function to get the random image of a dog.
// https://dog.ceo/dog-api/documentation/random
// used RUT-VIRT-FSF...

var requestUrl = 'https://dog.ceo/api/breeds/image/random';

var displayDogPic = $('#dogPicContainer');
var buttonDisplayEl = $('#dogButton');

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Failed to fetch dog picture');
            }
        })
        .then(function (data) {
            // Call a function to display the dog picture or process it
            displayDogPic(data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function saveDogPicToStorage(dogPic) {
    // Read existing dogPics from storage, add new dogPic, and save
    var dogPics = readDogPicsFromStorage() || [];
    dogPics.push(dogPic);
    localStorage.setItem('dogPics', JSON.stringify(dogPics));
}

function readDogPicsFromStorage() {
    var dogPicsJSON = localStorage.getItem('dogPics');
    return JSON.parse(dogPicsJSON);
}

function displayDogPic(data) {
    var dogPicUrl = data.message;
    var imgElement = $('<img>');
    imgElement.attr('src', dogPicUrl);
    imgElement.attr('alt', 'Random Dog');
    displayDogPic.append(imgElement);

    saveDogPicToStorage(dogPicUrl);
}

function handleDogPicClick(event) {
    event.preventDefault();

    getApi(requestUrl);
}

buttonDisplayEl.on('click', handleDogPicClick);
