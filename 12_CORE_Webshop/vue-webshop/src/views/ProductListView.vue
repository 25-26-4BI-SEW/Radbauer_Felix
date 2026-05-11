<template>
    <div class="grid">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '../stores/products'
  import ProductCard from '../components/ProductCard.vue'
  
  const store = useProductStore()
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  </style>