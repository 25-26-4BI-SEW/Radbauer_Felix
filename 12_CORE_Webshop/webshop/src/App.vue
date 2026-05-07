<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from './components/ProductCard.vue'

type ProductT = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: {
		id: number;
		name: string;
		image: string;
	};
	images: string[];
}

// 1. Create a reactive variable to hold the data
const products = ref<ProductT[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchProducts = async () => {
	loading.value = true;
	try {
		// 2. Fetch the data directly
		const response = await fetch('https://api.escuelajs.co/api/v1/products');

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		// 3. Slice and assign to the reactive ref
		products.value = data.slice(0, 20);
	} catch (err) {
		console.error(err);
		error.value = err instanceof Error ? err.message : 'Unknown error';
	} finally {
		loading.value = false;
	}
};

// 4. Call the function immediately on mount
fetchProducts();
</script>

<!-- <template>


	<div v-if="loading">Loading...</div>
	<div v-else-if="error">Error: {{ error }}</div>

	<div v-else class="product-grid">
		<ProductCard v-for="p in products" :key="p.id" :product="p" />
	</div>
</template>

<style scoped>
.product-grid {
	display: grid;
	/* Increased from 280px to 400px for larger cards */
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	gap: 28px;
	padding: 28px;
	max-width: 1400px;
	margin: 0 auto;
}

/* Mobile: 1 column */
@media (max-width: 820px) {
	.product-grid {
		grid-template-columns: 1fr;
	}
}

/* Tablet: 2 columns (400px * 2 = 800px minimum) */
@media (min-width: 821px) {
	.product-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* Desktop: 3 columns */
@media (min-width: 1250px) {
	.product-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

/* Large Desktop: 4 columns */
@media (min-width: 1650px) {
	.product-grid {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style> -->

<template>
	<div class="app-container">
		<div v-if="loading">Loading...</div>
		<div v-else-if="error">Error: {{ error }}</div>

		<div v-else class="product-grid">
			<ProductCard v-for="p in products" :key="p.id" :product="p" />
		</div>
	</div>
</template>

<style scoped>
.app-container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  background-color: #121212; /* Dark background */
  min-height: 100vh;
}

.product-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	gap: 28px;
	padding: 28px;
	max-width: 1400px;
	margin: 0 auto;
}

@media (max-width: 820px) {
	.product-grid {
		grid-template-columns: 1fr;
	}
}

@media (min-width: 821px) {
	.product-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1250px) {
	.product-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (min-width: 1650px) {
	.product-grid {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>

<!-- Unscoped styles to override any global defaults -->
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #f0f0f0;
}

#app {
  max-width: none !important;
  width: 100% !important;
}
</style>