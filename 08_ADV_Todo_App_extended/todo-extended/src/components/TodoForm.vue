<script setup>
import { ref, watch, onMounted } from 'vue';

const emit = defineEmits(['add-todo']);

const text = ref('');
const warning = ref(false);
const textareaRef = ref(null);


onMounted(() => {
    textareaRef.value.focus();
});

watch(text, (newValue) => {
    warning.value = newValue.length > 50;
});

function submit() {
    if (!warning.value && text.value.trim()) {
        emit('add-todo', text.value);
        text.value = '';
    }
}
</script>

<template>
    <div class="form" @submit.prevent="submit">
        <input ref="textareaRef" v-model="text" placeholder="Write your TODO..." @keydown.enter="submit"/>        
        
        <button :disabled="warning">
            Add Todo
        </button>

        <p v-if="warning" class="warning">
            ⚠️ Maximum of 50 characters exceeded!
        </p>
    </div>
</template>

<style scoped>
input {
    width: 75%;
    height: 2rem;
}

.warning {
    color: rgb(255, 49, 49);
    font-size: 0.9rem;
}
</style>