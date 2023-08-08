// used a getApi function to get the random image of a dog.
// used RUT-VIRT-FSF...

var requestUrl = 'https://dog.ceo/api/breeds/image/random:';
var displayDogPic = $()

function getApi(requestUrl) {
    fetch(requestUrl).then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
            responseText.textContent = response.status;
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}