<script setup>
import Input from "@/components/Input.vue";
import {reactive} from "vue";

const data = reactive({coordinates: {longitude: null, latitude: null}});
const handleData = (fetchedData) => {
	data.ipAddress = fetchedData.query;
	data.country = fetchedData.country;
	data.city = fetchedData.city;
	data.coordinates.latitude = fetchedData.lat;
	data.coordinates.longitude = fetchedData.lon;
	data.timezone = fetchedData.timezone;
	data.currentWeather = fetchedData.currentWeather;
}
</script>

<template>
    <header>
		<h1>IP-Address Lookup</h1>
    </header>
    <main>
        <Input @dataSent="handleData" />
		<ul id="data-list">
			<li>IP-Address: {{ data.ipAddress }}</li>
			<li>Country: {{ data.country }}</li>
			<li>City: {{ data.city }}</li>
			<li>Lat: {{ data.coordinates.latitude }}</li>
			<li>Lon: {{ data.coordinates.longitude }}</li>
			<li>Local timezone: {{ data.timezone }}</li>
			<li>Current Weather: {{ data.currentWeather }}</li>
		</ul>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (width > 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    header {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}

li {
	text-align: left;
}
</style>