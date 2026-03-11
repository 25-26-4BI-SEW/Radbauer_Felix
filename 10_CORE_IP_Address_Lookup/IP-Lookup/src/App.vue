<script setup>
import {onMounted, reactive, ref, watch} from 'vue';
import axios from 'axios';

const domain = ref("");
const input = ref(null);

onMounted(() => {
	if (input.value) input.value.focus();
});

const dataObj = reactive({
	ip: '',
	country: '',
	city: '',
	coordinates: {
		latitude: '',
		longitude: '',
	},
	localTime: '',
	timezone: '',
	sunrise: '',
	sunset: '',
	currentWeather: {
		temperature: '',
		windSpeed: ''
	}
});

watch(domain, async (newVal) => {
	if (newVal.length > 3) {
		await fetchIPData();
		await fetchSunTimes(dataObj.coordinates.latitude, dataObj.coordinates.longitude);
		await fetchWeather(dataObj.coordinates.latitude, dataObj.coordinates.longitude);
		console.log(dataObj)
	}
});

const fetchIPData = async () => {
	try {
		const httpApi = await axios.get(`http://ip-api.com/json/${domain.value}`);
		const httpData = httpApi.data;
		console.log(httpData);
		dataObj.ip = httpData.query;
		dataObj.country = httpData.country;
		dataObj.city = httpData.city;
		dataObj.coordinates.latitude = httpData.lat;
		dataObj.coordinates.longitude = httpData.lon;
		dataObj.timezone = httpData.timezone;
		dataObj.localTime = new Date().toLocaleString('DE-de', { timeZone: httpData.timezone }).split(", ")[1];
	} catch (error) {
		console.error(error);
	}
}

const fetchSunTimes = async (lat, lon) => {
	try {
		const sunTimes = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
		const sunData = sunTimes.data;
		console.log(sunData);
		dataObj.sunset = sunData.results.sunset;
		dataObj.sunrise = sunData.results.sunrise;
	} catch (error) {
		console.error(error);
	}
}

const fetchWeather = async (lat, lon) => {
	try{
		const { data } = await axios.get('https://api.open-meteo.com/v1/forecast', {
			params: {
				latitude: lat,
				longitude: lon,
				current_weather: true
			}
		});
		const weather = data;
		dataObj.currentWeather.temperature = weather.current_weather.temperature;
		dataObj.currentWeather.windSpeed = weather.current_weather.windspeed;
		console.log(weather);
	} catch (error) {
		console.error(error);
	}
	// { temperature, windspeed, winddirection, weathercode, time }
};
</script>

<template>
	<input id="domain" ref="input" v-model="domain" autocomplete="off" name="domain" placeholder="Enter Domain"
	       type="text">
	<ul id="data-list">
		<li>IP-Address: {{ dataObj.ip }}</li>
		<li>Country: {{ dataObj.country }}</li>
		<li>City: {{ dataObj.city }}</li>
		<li>Latitude: {{ dataObj.coordinates.latitude }}</li>
		<li>Longitude: {{ dataObj.coordinates.longitude }}</li>
		<li>Timezone: {{ dataObj.timezone }}</li>
		<li>Local Time: {{ dataObj.localTime }}</li>
		<li>Sunrise: {{ dataObj.sunrise }}</li>
		<li>Sunset: {{ dataObj.sunset }}</li>
		<li>Temperature: {{ dataObj.currentWeather.temperature }}</li>
		<li>Wind Speed: {{ dataObj.currentWeather.windSpeed }}</li>
		<!--<li>Local timezone: {{ data.timezone }}</li>
		<li>Current Weather: {{ data.currentWeather }}</li>-->
	</ul>
</template>

<style scoped></style>
