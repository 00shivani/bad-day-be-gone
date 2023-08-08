const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f71f1a918cmshf09aca3db42acafp18d5ffjsna25ce5e83525',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}