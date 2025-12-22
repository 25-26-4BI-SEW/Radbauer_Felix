<script setup>
import { onMounted, ref, watch } from "vue";

const text = ref("");
const warning = ref("");
const warningTemplate = "Todos should not be longer than 50 characters";
const inputRef = ref(null);

onMounted(() => {
	if (inputRef.value) {
		inputRef.value.focus();
	}
});

watch(text, (newValue) => {
	if (newValue.length > 50) {
		warning.value = warningTemplate
	} else {
		warning.value = ""
	}
}, { immediate: true }); // This ensures it runs on page load

const emit = defineEmits(["addEvent", "clearTodos"]);

function add() {
	if (text.value === "" || !text.value) return;
	emit("addEvent", text.value);
	text.value = "";
	inputRef.value.focus();
}
</script>

<template>
	<div class="input-wrapper">
		<input type="text" v-model="text" @keyup.enter="add" placeholder="Add a new todo"
			:class="{ 'has-warning': warning }" ref="inputRef" />
		<button @click="add">Add Todo</button>
		<button @click="emit('clearTodos')">Clear Todos</button>
		<p v-if="warning" class="warning-text">{{ warning }}</p>
	</div>
</template>

<style scoped>
.input-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
	justify-content: center;
	align-items: center;
}

input {
	flex: 1;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
}

button {
	margin-right: 0.5rem;
	padding: 0.5rem 1rem;
}

.warning-text {
	color: red;
	margin-top: 0.5rem;
	font-size: 0.9rem;
}

input.has-warning {
	border-color: red;
	outline-color: red;
}
</style>