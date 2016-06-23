var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?&appid=0f5eff124be6750ae10859b8b0669130&units=metric";


//0f5eff124be6750ae10859b8b0669130
module.exports = {

	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; 

		return axios.get(requestUrl).then(function (res){

			if (res.data.cod && res.data.message) {

				throw new Error(res.data.messaage);
			}
			else {
				return res.data.main.temp;
			}

		}, function(res) {

			throw new Error(res.data.message);
		});
	}
}