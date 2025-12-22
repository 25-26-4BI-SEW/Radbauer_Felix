<script setup>
import { onMounted, ref, watch } from "vue";

const emit = defineEmits(["addEvent", "clearTodos"]);

const text = ref("");
const warning = ref("");
const warningTemplate = "Todos should not be longer than 50 characters";
const inputRef = ref(null);

// automatically focus input on page load
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
}, { immediate: true });


function add() {
	if (text.value === "" || !text.value || text.value.length > 50) return;
	emit("addEvent", text.value);
	text.value = "";
	inputRef.value.focus();
}
</script>

<template>
	<div class="input-wrapper">
		<input type="text" v-model="text" @keyup.enter="add" placeholder="Add a new todo"
			:class="{ 'has-warning': warning }" ref="inputRef" />
		<div id="button-container">
			<button @click="add">Add Todo</button>
			<button @click="emit('clearTodos')">Clear Todos</button>
		</div>
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

#button-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
}
</style>