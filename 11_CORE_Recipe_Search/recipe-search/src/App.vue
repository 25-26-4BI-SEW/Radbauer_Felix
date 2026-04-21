<script setup>
import { ref, onMounted } from 'vue';
import { watchDebounced } from '@vueuse/core';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

const recipeKeyword = ref('');
const input = ref(null);
const recipeList = ref([]);
const errorMessage = ref('');

const apiKey_1 = import.meta.env.VITE_API_KEY_1;
const apiKey_2 = import.meta.env.VITE_API_KEY_2;



// `https://api.spoonacular.com/recipes/complexSearch?apiKey={apiKey}&query`

// watchDebounced(recipeKeyword, async () => {
// 	try {
// 		const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey_1}&query=${recipeKeyword.value}`);
// 		console.log(recipes.data);
// 		recipeList.value = recipes.data.results;
// 		console.log(recipeList.value);
// 	} catch (error) {
// 		console.error(error);
// 		errorMessage.value = error;
// 	}
// }, { debounce: 500 });

// onMounted(() => {
// 	if (input.value) {
// 		input.value.focus();
// 	}
// });
</script>

<template>
	<!-- <li v-for="recipe in recipeList" :key="recipe.id">
		<RouterLink :to="`/recipe/${recipe.id}`">
			<img :src="recipe.image" :alt="`image of ${recipe.title}`" />
			<span>{{ recipe.title }}</span>
		</RouterLink>
		<br><br><br>
	</li> -->
	<!-- <ul>
		<li v-for="recipe in recipeList" :key="recipe.id">
			<RouterLink :to="`/recipe/${recipe.id}`">
				<img :src="recipe.image" :alt="`image of ${recipe.title}`" />
				<span>{{ recipe.title }}</span>
			</RouterLink>
		</li>
	</ul> -->
	<Header />
	<RouterView />
	<Footer />
</template>

<style scoped>

</style>