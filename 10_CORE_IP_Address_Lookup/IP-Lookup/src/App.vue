<script setup>
import { onMounted, reactive, ref } from 'vue';
import { watchDebounced } from '@vueuse/core';
import axios from 'axios';

const domain = ref('');
const input = ref(null);
const loading = ref(false);
const error = ref('');

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

// Resets stale data before each new lookup
const resetData = () => {
	dataObj.ip = '';
	dataObj.country = '';
	dataObj.city = '';
	dataObj.coordinates.latitude = '';
	dataObj.coordinates.longitude = '';
	dataObj.localTime = '';
	dataObj.timezone = '';
	dataObj.sunrise = '';
	dataObj.sunset = '';
	dataObj.currentWeather.temperature = '';
	dataObj.currentWeather.windSpeed = '';
};

watchDebounced(domain, async (newVal) => {
	if (newVal.length > 3) {
		resetData();
		loading.value = true;
		error.value = '';
		try {
			await fetchIPData();
			await Promise.any([
				fetchSunTimes(dataObj.coordinates.latitude, dataObj.coordinates.longitude),
				fetchWeather(dataObj.coordinates.latitude, dataObj.coordinates.longitude)
			]);
		} catch (e) {
			error.value = e;
		} finally {
			loading.value = false;
		}
	}
}, { debounce: 500 });

const fetchIPData = async () => {
	const { data } = await axios.get(`http://ip-api.com/json/${domain.value}`);
	if (data.status === 'fail') throw new Error(data.message);
	dataObj.ip = data.query;
	dataObj.country = data.country;
	dataObj.city = data.city;
	dataObj.coordinates.latitude = data.lat;
	dataObj.coordinates.longitude = data.lon;
	dataObj.timezone = data.timezone;
	dataObj.localTime = new Date().toLocaleString('DE-de', { timeZone: data.timezone }).split(", ")[1];
};

const fetchSunTimes = async (lat, lon) => {
	const { data } = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
	dataObj.sunset = data.results.sunset;
	dataObj.sunrise = data.results.sunrise;
};

const fetchWeather = async (lat, lon) => {
	const { data } = await axios.get('https://api.open-meteo.com/v1/forecast', {
		params: { latitude: lat, longitude: lon, current_weather: true }
	});
	dataObj.currentWeather.temperature = data.current_weather.temperature;
	dataObj.currentWeather.windSpeed = data.current_weather.windspeed;
};
</script>

<template>
	<input id="domain" ref="input" v-model="domain" autocomplete="off" name="domain" placeholder="Enter Domain" type="text">
	<p v-if="loading">Loading...</p>
	<p v-else-if="error">{{ error }}</p>
	<ul id="data-list" v-else-if="dataObj.ip && domain">
		<li><span class="key">IP-Address</span> {{ dataObj.ip }}</li>
		<li><span class="key">Country</span> {{ dataObj.country }}</li>
		<li><span class="key">City</span> {{ dataObj.city }}</li>
		<li><span class="key">Latitude</span> {{ dataObj.coordinates.latitude }}</li>
		<li><span class="key">Longitude</span> {{ dataObj.coordinates.longitude }}</li>
		<li><span class="key">Timezone</span> {{ dataObj.timezone }}</li>
		<li><span class="key">Local Time</span> {{ dataObj.localTime }}</li>
		<li><span class="key">Sunrise</span> {{ dataObj.sunrise }}</li>
		<li><span class="key">Sunset</span> {{ dataObj.sunset }}</li>
		<li><span class="key">Temperature</span> {{ dataObj.currentWeather.temperature }}˚C</li>
		<li><span class="key">Wind Speed</span> {{ dataObj.currentWeather.windSpeed }}km/h</li>
	</ul>
</template>

<style scoped></style>