<script>
export default {
    name: "Todo",

    props: {
        description: String,
        time: [Date, String],
        isCompleted: Boolean,
    },

    computed: {
        getAge() {
            const now = new Date();
            const difference = now.getTime() - new Date(this.time).getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(difference / (1000 * 60 * 60) % 24);
            const minutes = Math.floor(difference / (1000 * 60) % 60);

            return `${days}d ${hours}h ${minutes}m`;
        }
    },

    methods: {
        toggleCompleted() {
            this.$emit("update:isCompleted", !this.isCompleted);
        }
    },

    emits: ["update:isCompleted"]
}
</script>

<template>
    <tr>
        <td> {{ description }}</td>
        <td> {{ getAge }}</td>
        <td @click="toggleCompleted" class="done-cell"> {{ isCompleted ? "✅" : "❌" }}</td>
    </tr>
</template>

<style scoped>
td.done-cell {
    cursor: pointer;
    font-size: 1.2rem;
}

td {
    border: solid 1px white;
    text-align: center;
}
</style>