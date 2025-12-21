<template>
    <h1>TODO App</h1>
    <Input
        @addEvent="putTodoInArray"
        @clearTodos="clearAllTodos"
    />
    <TodoList :todos="todos"/>
</template>

<script setup>
import Input from "./components/Input.vue";
import TodoList from "./components/TodoList.vue";
import { onMounted, ref, watch } from "vue";

const todos = ref([]);

onMounted(() => {
    const raw = localStorage.getItem("todos");
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                todos.value = parsed;
            }
        } catch (e) {
            console.error(e);
        }
    }
});

watch(todos, (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
}, { deep: true });

const putTodoInArray = (description) => {
    if (!description) return;
    todos.value.push({
        description,
        time: new Date().toISOString(),
        isCompleted: false
    });
};

const clearAllTodos = () => {
    todos.value = [];
    localStorage.removeItem("todos");
};
</script>
