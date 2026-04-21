<script setup>import { RouterLink } from 'vue-router'</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>© 2026 RecipeApp</p>
      <RouterLink :to="{ name: 'impressum' }">Impressum</RouterLink>
      <RouterLink to="/">Main Page</RouterLink>
      <p class="sub">Built with Vue 3</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1e1e2f;
  color: white;
  margin-top: 2rem;
  padding: 1.5rem 0;
  text-align: center;
}

.container {
  min-width: 1100px;
  margin: 0 auto;
}

.sub {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: 0.3rem;
}
</style>