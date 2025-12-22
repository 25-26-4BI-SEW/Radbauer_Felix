<script setup>
import Todo from "./Todo.vue";

const props = defineProps({ todos: Array });

</script>

<template>
    <table v-if="props.todos.length > 0">
        <thead>
            <tr>
                <th>Todo</th>
                <th>Created</th>
                <th>Done</th>
            </tr>
        </thead>
        <tbody>
            <Todo v-for="item in props.todos" :description="item.description" :time="item.time"
                v-model:isCompleted="item.isCompleted" />
        </tbody>
    </table>
    <div v-else class="no-todos">You have <strong>NO Todos!</strong></div>
</template>

<style scoped>
.no-todos {
    text-align: center;
    margin-top: 2rem;
}

table {
    border-collapse: collapse;
}

th {
    border: solid 1px white;
    text-align: center;
}
</style>