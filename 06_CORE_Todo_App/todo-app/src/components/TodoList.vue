<script setup>
import Todo from "./Todo.vue";

defineProps({
    todos: {
        type: Array,
        required: true,
    }
});
</script>

<template>
    <table v-if="todos && todos.length > 0">
        <thead>
        <tr>
            <th>Todo</th>
            <th>Created</th>
            <th>Done</th>
        </tr>
        </thead>
        <tbody>
        <Todo
            v-for="(item, index) in todos"
            :key="index"
            v-model:isCompleted="item.isCompleted"
            :description="item.description"
            :time="item.time"
        />
        </tbody>
    </table>
    <div v-else class="no-todos">You have <strong>NO Todos!</strong></div>
</template>