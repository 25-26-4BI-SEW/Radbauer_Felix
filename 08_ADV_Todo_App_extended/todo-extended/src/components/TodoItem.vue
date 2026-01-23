<script setup>
const emit = defineEmits(['remove']);
</script>

<template>
  <li class="todo-item">
    <span>
      <slot/>
    </span>
    <button @click="emit('remove')">✕</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #1E2122;
  margin-bottom: 0.5rem;
  color: #7FC8ED;
}
</style>