<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { watchDebounced } from '@vueuse/core';
import axios from 'axios';

const recipeKeyword = ref('');
const input = ref(null);
const recipeList = ref([]);
const errorMessage = ref('');

const apiKey_1 = import.meta.env.VITE_API_KEY_1;
// const apiKey_2 = import.meta.env.VITE_API_KEY_2;

watchDebounced(recipeKeyword, async () => {
	try {
		const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey_1}&query=${recipeKeyword.value}`);
		console.log(recipes.data);
		recipeList.value = recipes.data.results;
		console.log(recipeList.value);
	} catch (error) {
		console.error(error);
		errorMessage.value = error;
	}
}, { debounce: 500 });

onMounted(() => {
	input.value.focus();
});


</script>

<template>
	<main>
		<input type="text" name="recipe-keyword" id="recipe-keyword" 
		placeholder="Search for recipes..." ref="input" v-model="recipeKeyword">

		<ul>
			<li v-for="recipe in recipeList" :key="recipe.id">
				<router-link :to="{ name: 'recipe-detail', params: { id: recipe.id }, state: { recipe } }">
					<img :src="recipe.image" :alt="`image of ${recipe.title}`" />
					<span>{{ recipe.title }}</span>
				</router-link>
			</li>
		</ul>
	</main>
</template>


<style scoped>

main{
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;
	width: 1100px;
}


ul {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
	gap: 1rem;
}

li {
	list-style: none;
}

a {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
	padding: 1rem;
}

span {
	text-align: center;
}

input#recipe-keyword {
	width: 50%;
	height: 3em;
	margin: 0 auto;
}
</style>