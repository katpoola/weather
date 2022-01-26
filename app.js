document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
	var key = '5438e7446241226c8b5e1a045bdc4c4e';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function(resp) {
		return resp.json()
	}) // convert data to json
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {
		// catch any errors
	})
}

function cityWeather(e) {
	weatherDataFetch('Tallinn');
}