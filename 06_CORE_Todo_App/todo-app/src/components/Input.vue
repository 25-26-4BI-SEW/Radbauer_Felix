<script setup>
import {computed, ref} from "vue";

const text = ref("");
const warningTemplate = "Text should be < 50 characters";
const warning = computed(() => {
    return text.value.length > 50 ? warningTemplate : "";
});

const emit = defineEmits(["addEvent", "clearTodos"]);

function add() {
    if (text.value === "" || !text.value) return;
    emit("addEvent", text.value);
    text.value = "";
}
</script>

<template>
    <div class="input-wrapper">
        <input type="text" v-model="text" @keyup.enter="add" placeholder="Add a new todo"/>
        <button @click="add">Add Todo</button>
        <button @click="emit('clearTodos')">Clear Todos</button>
    </div>

    <p id="warning" v-if="warning" style="color: red;">{{ warning }}</p>
</template>

<style scoped>
input[type="text"] {
    flex: 1;
}

.input-wrapper {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
}

#warning {
    color: #ffcc00; /* bright yellow for visibility */
    font-weight: bold;
    margin-top: 0.5rem;
}
</style>
