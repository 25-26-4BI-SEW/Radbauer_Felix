<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()
</script>

<template>
	<main class="app-container">
		<details v-if="productsStore.loading">
			<summary>Loading...</summary>
		</details>
		<details v-else-if="productsStore.error">
			<summary>Error: {{ productsStore.error }}</summary>
			<p>Failed to load products. Please try again later.</p>
		</details>

		<section class="product-grid"
			v-if="productsStore.products.length > 0 && !productsStore.loading && !productsStore.error">
			<ProductCard v-for="p in productsStore.products" :key="p.id" :product="p"
				@delete="productsStore.removeProduct(p.id)" />
		</section>
		<details v-else>
			<summary>No products found</summary>
			<p>There are no products available at the moment.</p>
		</details>
	</main>
</template>

<style scoped>
.app-container {
	width: 100%;
	max-width: none;
	margin: 0;
	padding: 0;
	background-color: #121212;
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
