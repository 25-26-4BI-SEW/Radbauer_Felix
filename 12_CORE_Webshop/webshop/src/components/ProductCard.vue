<script setup lang="ts">
import deleteIcon from '../assets/icons8-delete.svg';

defineProps<{
	product: {
		id: number;
		title: string;
		price: number;
		description: string;
		images: string[];
		category: {
			id: number;
			name: string;
			slug: string;
			image: string;
			creationAt: string;
			updatedAt: string;
		};
		creationAt: string;
		updatedAt: string;
	};
}>();

const emit = defineEmits(['delete']);
</script>

<template>
	<article class="product-card">
		<figure class="card-image-wrapper">
			<img :src="product.images[0] || 'https://via.placeholder.com/300x300?text=No+Image'" :alt="product.title"
				class="card-image" />
		</figure>

		<section class="card-content">
			<h3 class="card-title">{{ product.title }}</h3>

			<p class="card-category">
				{{ product.category.name }}
			</p>

			<p class="card-price">
				{{ product.price.toFixed(2) }}€
			</p>

			<p class="card-description">
				{{ product.description.length > 100
					? product.description.substring(0, 100) + '...'
					: product.description }}
			</p>

			<section class="buttons">
				<button class="card-button">
					View Details
				</button>
				<button @click="emit('delete', product.id)">
					<abbr title="Delete Product"><img class="delete-icon" :src="deleteIcon" alt="Delete" /></abbr>
				</button>
			</section>
		</section>
	</article>
</template>

<style scoped>
.product-card {
	background: #ffffff;
	border-radius: 16px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	overflow: hidden;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	display: flex;
	flex-direction: column;
	height: 100%;
	border: 1px solid #f0f0f0;
}

.product-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-image-wrapper {
	position: relative;
	width: 100%;
	/* Changed from 100% (square) to 75% for taller images (4:3 ratio) */
	padding-top: 75%;
	background-color: #f8f9fa;
	overflow: hidden;
}

.card-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.5s ease;
}

.product-card:hover .card-image {
	transform: scale(1.05);
}

.card-content {
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 0.75rem;
}

.card-title {
	font-size: 1.25rem;
	font-weight: 700;
	color: #1a1a1a;
	margin: 0;
	line-height: 1.4;
	/* Removed line-clamp - title displays fully now */
	word-wrap: break-word;
}

.card-category {
	font-size: 0.85rem;
	color: #6b7280;
	background-color: #f3f4f6;
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
	width: fit-content;
	margin-bottom: 0.5rem;
	font-weight: 500;
}

.card-price {
	font-size: 1.35rem;
	font-weight: 600;
	color: #2563eb;
	margin: 0;
}

.card-description {
	font-size: 0.95rem;
	color: #6b7280;
	line-height: 1.5;
	margin: 0;
	flex-grow: 1;

	/* Keep description truncated to maintain card consistency */
	display: -webkit-box;
	display: box;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	-webkit-box-orient: vertical;
	box-orient: vertical;
	overflow: hidden;
}

.card-button {
	margin-top: auto;
	width: 100%;
	padding: 0.85rem;
	background-color: #1a1a1a;
	color: white;
	border: none;
	border-radius: 8px;
	font-weight: 600;
	cursor: pointer;
	transition: background-color 0.2s ease;
	font-size: 0.95rem;
}

.card-button:hover {
	background-color: #333333;
}

.buttons {
	display: flex;
	gap: 0.5rem;
}

@media (max-width: 640px) {
	.product-card {
		border-radius: 12px;
	}

	.card-content {
		padding: 1.25rem;
	}

	.card-title {
		font-size: 1.1rem;
	}
}

.delete-icon {
	width: 24px;
	height: 24px;
	border: none;
	background: none;
	cursor: pointer;
}
</style>