<script setup>
import Todo from "./Todo.vue";

defineProps({
    todos: Array
})
</script>

<template>
    <table v-if="todos.length > 0">
        <thead>
            <tr>
                <th>Todo</th>
                <th>Created</th>
                <th>Done</th>
            </tr>
        </thead>
        <tbody>
            <Todo
                v-for="item in todos"
                :description="item.description"
                :time="item.time"
                v-model:isCompleted="item.isCompleted"
            />
        </tbody>
    </table>
    <div v-else class="no-todos">You have <strong>NO Todos!</strong></div>
</template>

<style scoped>
.no-todos {
    text-align: center;
    margin-top: 2rem;
}
</style>