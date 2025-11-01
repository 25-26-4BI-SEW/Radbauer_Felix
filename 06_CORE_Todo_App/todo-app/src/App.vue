<script setup>
import {useStorage} from "@vueuse/core";

import Input from "./components/Input.vue";
import TodoList from "./components/TodoList.vue";

const STORAGE_KEY = "vue-todos";

const todoArray = useStorage(STORAGE_KEY, [], localStorage, {deep: true});

const putTodoInArray = (description) => {
    todoArray.value.push({
        description,
        time: new Date(),
        isCompleted: false
    })
};

const clearAllTodos = () => todoArray.value = null;
</script>

<template>
    <h1>TODO App</h1>
    <Input @addEvent="putTodoInArray" @clearTodos="clearAllTodos()" />
    <TodoList :todos="todoArray"/>
</template>
