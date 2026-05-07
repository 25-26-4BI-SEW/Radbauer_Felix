<script setup lang="ts">
defineProps<{
  product: {
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
  };
}>();
</script>

<template>
  <article class="product-card">
    <div class="card-image-wrapper">
      <img 
        :src="product.images[0] || product.category.image" 
        :alt="product.title" 
        class="card-image"
      />
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ product.title }}</h3>
      
      <p class="card-price">
        {{ product.price.toFixed(2) }}€
      </p>
      
      <p class="card-description">
        {{ product.description.length > 100 
          ? product.description.substring(0, 100) + '...' 
          : product.description }}
      </p>
      
      <button class="card-button">
        View Details
      </button>
    </div>
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
</style>