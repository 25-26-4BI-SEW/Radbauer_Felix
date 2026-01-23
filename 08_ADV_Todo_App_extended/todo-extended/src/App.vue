<script setup>
import { ref, onMounted, watch } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoItem from './components/TodoItem.vue'

const todos = ref([]);

onMounted(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
        todos.value = JSON.parse(saved);
    }
})

watch(todos, (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
}, 
{ deep: true });

function addTodo(text) {
    todos.value.push({
        id: Date.now(),
        text
    });
}

const removeTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
}
</script>

<template>
    <main class="app">
        <h1>Vue 3 Todo App</h1>

        <TodoForm @add-todo="addTodo" />

        <TransitionGroup name="fade" tag="ul" class="todo-list">
            <TodoItem v-for="todo in todos" :key="todo.id" @remove="removeTodo(todo.id)">
                <template #default>
                    {{ todo.text }}
                </template>
            </TodoItem>
        </TransitionGroup>
    </main>
</template>

<style>
.app {
    max-width: 500px;
    margin: 2rem auto;
    font-family: sans-serif;
}

.todo-list {
    padding: 0;
    list-style: none;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>