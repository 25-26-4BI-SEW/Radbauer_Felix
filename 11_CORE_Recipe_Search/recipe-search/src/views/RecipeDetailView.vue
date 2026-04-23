<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const recipeId = route.params.id;
const recipe = ref(null);
const loading = ref(true);
const errorMessage = ref('');

const apiKey_1 = import.meta.env.VITE_API_KEY_1;

const fetchRecipeDetails = async () => {
	try {
		if (history.state && history.state.recipe) {
			recipe.value = history.state.recipe;
			console.log('Using recipe data from router state:', recipe.value);
			loading.value = false;
			return;
		}

		// Fallback
		const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey_1}`);
		recipe.value = response.data;
		console.log('Recipe details from API:', recipe.value);
	} catch (error) {
		console.error('Error fetching recipe details:', error);
		errorMessage.value = 'Failed to load recipe details. Please try again later.';
	} finally {
		loading.value = false;
	}
};

onMounted(() => {
	fetchRecipeDetails();
});
</script>

<template>
	<div>
		<div v-if="loading" class="loading">
			<p>Loading recipe details...</p>
		</div>

		<div v-else-if="errorMessage" class="error">
			<p>{{ errorMessage }}</p>
		</div>

		<div v-else-if="recipe" class="recipe-detail">
			<h1>{{ recipe.title }}</h1>
			<img :src="recipe.image" :alt="`Image of ${recipe.title}`" class="recipe-image" />

			<div class="recipe-info">
				<p><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</p>
				<p><strong>Servings:</strong> {{ recipe.servings }}</p>
				<p v-if="recipe.sourceUrl">
					<strong>Source:</strong>
					<a :href="recipe.sourceUrl" target="_blank">
						Original Recipe
					</a>
				</p>
			</div>

			<div class="ingredients">
				<h2>Ingredients</h2>
				<ul>
					<li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
						{{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
					</li>
				</ul>
			</div>

			<div class="instructions">
				<h2>Instructions</h2>
				<div v-html="recipe.instructions"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
div {
	max-width: 800px;
	margin: 0 auto;
	padding: 1rem;
	color: #e9ecef;
}

.loading,
.error {
	text-align: center;
	padding: 2rem;
	font-size: 1.2rem;
}

.error {
	color: #ff6b6b;
}

.recipe-detail {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: #c2e350;
}

.recipe-image {
	width: 100%;
	max-width: 400px;
	height: auto;
	border-radius: 0.5rem;
	margin: 0 auto;
	display: block;
}

.recipe-info {
	background: #2d3748;
	padding: 1rem;
	border-radius: 0.5rem;
	border-left: 4px solid #4299e1;
}

.recipe-info p {
	margin: 0.5rem 0;
}

.ingredients,
.instructions {
	margin-top: 1rem;
}

h2 {
	color: #a0aec0;
	border-bottom: 2px solid #4a5568;
	padding-bottom: 0.5rem;
	margin-bottom: 1rem;
}

.ingredients ul {
	list-style: none;
	padding: 0;
}

.ingredients li {
	padding: 0.5rem 0;
	border-bottom: 1px solid #4a5568;
}

.instructions {
	line-height: 1.6;
}

.instructions :deep(ol) {
	padding-left: 1.5rem;
}

.instructions :deep(li) {
	margin: 1rem 0;
}

a {
	color: #63b3ed;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}
</style>