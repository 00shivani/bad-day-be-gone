fetch('https://zenquotes.io/api/[random]', {
    method: 'GET',
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
    
