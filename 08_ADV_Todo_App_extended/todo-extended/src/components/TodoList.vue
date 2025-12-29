<script setup>
import { ref, watch } from 'vue';
import Todo from "./Todo.vue";

const props = defineProps({ 
    todos: Array,
    onRemoveCompleted: Function 
});

const visibleTodos = ref([...props.todos]);

// Watch for changes in todos prop
watch(() => props.todos, (newTodos) => {
    visibleTodos.value = [...newTodos];
}, { deep: true });

// Filter out completed todos
function removeCompleted() {
    if (props.onRemoveCompleted) {
        props.onRemoveCompleted();
    }
}
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
            <TransitionGroup name="fade" tag="div" class="transition-wrapper">
                <Todo 
                    v-for="item in visibleTodos" 
                    :key="item.time"
                    :description="item.description" 
                    :time="item.time"
                    v-model:isCompleted="item.isCompleted"
                    class="todo-item"
                />
            </TransitionGroup>
        </tbody>
    </table>
    <div v-else class="no-todos">
        You have <strong>NO Todos!</strong>
    </div>
    <div v-if="props.todos.length > 0" class="actions">
        <button @click="removeCompleted" class="remove-completed">
            Remove Completed Todos
        </button>
    </div>
</template>

<style scoped>
.no-todos {
    text-align: center;
    margin-top: 2rem;
}

table {
    border-collapse: collapse;
}

th, td {
    border: solid 1px white;
    text-align: center;
    padding: 0.5rem;
    vertical-align: middle;
}

.transition-wrapper {
    display: contents;  /* This makes the div act as if it's not there for layout purposes */
}

/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.todo-item {
    transition: all 0.5s ease;
}

.actions {
    margin-top: 1rem;
    text-align: right;
}

.remove-completed {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.remove-completed:hover {
    background-color: #cc0000;
}

.remove-completed:disabled {
    background-color: #666;
    cursor: not-allowed;
}
</style>