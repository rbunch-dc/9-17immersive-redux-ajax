import axios from 'axios';

const APIKEY = '482c145ce8edf1d69ea5168f9d06460c';
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APIKEY}&zip=`;

function fetchWeather (zipCode){
	if(isNaN(Number(zipCode))){
		return{
			type:'BAD_DATA'			
		}
	}
	console.log(zipCode);
	const fullWeatherUrl = weatherUrl + zipCode;
	const data = axios.get(fullWeatherUrl)
	console.log(data);
	return{
		type:'GET_WEATHER',
		payload: data
	}
}

export default fetchWeather