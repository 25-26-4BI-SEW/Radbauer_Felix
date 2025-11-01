<script setup>
import {ref} from "vue";

const text = ref("");

const emit = defineEmits(["addEvent", "clearTodos"])

function add() {
    if (text.value === "" || !text.value) return;
    emit("addEvent", text.value);
    text.value = "";
}
</script>

<template>
    <div class="input-wrapper">
        <input type="text" v-model.trim="text" @keyup.enter="add"/>
        <button @click="add">Add Todo</button>
        <button @click="emit('clearTodos')">Clear Todos</button>
    </div>
</template>

<style scoped>
input[type="text"] {
    flex: 1;
}

div {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
}
</style>
