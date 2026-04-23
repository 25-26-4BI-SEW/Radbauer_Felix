<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <RouterLink to="/"><h1>RecipeApp</h1></RouterLink>
    </header>
</template>

<style scoped>
.header {
    background: #1e1e2f;
    color: white;
    padding: 1rem 0;
    text-align: center;
    margin: 0 auto;
    min-width: 1100px;
}

</style>