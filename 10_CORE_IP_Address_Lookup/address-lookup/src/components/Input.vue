<script setup>
import {onMounted, ref, watch} from 'vue';
import axios from 'axios';

const emit = defineEmits(['dataSent']);
const text = ref('');
const input = ref(null);

onMounted(() => {
	if(input.value) input.value.focus();
})

watch(text, (newLength) => {
	if (newLength.length > 3) {
		searchIpData();
	}
});

const searchIpData = async () => {
	try {
		const json = await axios.get(`http://ip-api.com/json/${text.value}`);
		const fetchedData = json.data;
		console.log(fetchedData);
		emit("dataSent", fetchedData);
	} catch (e) {
		console.error("Error while fetching data: ", e)
	}
};
</script>

<template>
	<input id="domain-input" v-model="text" name="domain" type="text" ref="input">
</template>

<style scoped>

</style>