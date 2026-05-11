<template>
	<div class="card">
		<img :src="product.image" :alt="product.title" />

		<div class="content">
			<h2>{{ product.title }}</h2>

			<p class="price">€{{ product.price }}</p>

			<p class="description">
				{{ product.description }}
			</p>

			<div class="actions">
				<router-link :to="`/edit/${product.id}`" class="edit-btn">
					Edit
				</router-link>

				<button @click="removeProduct" class="delete-btn">
					Delete
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useProductStore } from '../stores/products'

const props = defineProps({
	product: Object
})

const store = useProductStore()

function removeProduct() {
	store.deleteProduct(props.product.id)
}
</script>

<style scoped>
.card {
	background: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

img {
	width: 100%;
	height: 220px;
	object-fit: cover;
}

.content {
	padding: 16px;
}

h2 {
	margin: 0 0 10px;
}

.price {
	color: #42b883;
	font-weight: bold;
	margin-bottom: 10px;
}

.description {
	color: #555;
	margin-bottom: 20px;
}

.actions {
	display: flex;
	gap: 10px;
}

.edit-btn,
.delete-btn {
	border: none;
	padding: 10px 14px;
	border-radius: 6px;
	cursor: pointer;
	color: white;
	font-weight: bold;
}

.edit-btn {
	background: #3498db;
}

.delete-btn {
	background: #e74c3c;
}
</style>