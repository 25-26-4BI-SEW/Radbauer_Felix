<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const recipeId = route.params.id;
    console.log(recipeId);
    
</script>

<template>
  <div>
    <h1>Recipe Detail</h1>
    <p><strong>Recipe ID:</strong> {{ recipeId }}</p>
  </div>
</template>