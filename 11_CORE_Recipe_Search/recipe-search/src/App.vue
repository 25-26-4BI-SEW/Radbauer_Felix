<script setup>
import { ref, onMounted } from 'vue';
import { watchDebounced } from '@vueuse/core';
import axios from 'axios';

const recipeKeyword = ref('');
const input = ref(null);
const recipeList = ref([]);

const apiKey = import.meta.env.VITE_API_KEY;


// `https://api.spoonacular.com/recipes/complexSearch?apiKey={apiKey}&query`

watchDebounced(recipeKeyword, async () => {
	try {
		const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${recipeKeyword.value}`);
		recipeList.value = recipes.data.results;
		console.log(recipeList.value);
	} catch (error) {
		console.error(error)
	}
}, { debounce: 500 });

onMounted(() => {
	if (input.value) 
		input.value.focus();
});
</script>

<template>
	<input type="text" name="recipe-keyword" id="recipe-keyword" placeholder="Search for recipes..." ref="input"
		v-model="recipeKeyword">
	<ul>
		<li v-for="recipe in recipeList" :key="recipe.id">
			{{ recipe.title }}
		</li>
	</ul>
</template>

<style scoped></style>