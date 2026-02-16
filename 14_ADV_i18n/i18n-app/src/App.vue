<script setup>
import {useI18n} from 'vue-i18n';
import Counter from '@/components/Counter.vue'
import {computed, ref} from "vue";

const {t, d, n, locale, availableLocales} = useI18n({useScope: "global"});
const counter = ref(0);

const handleCounterChange = (ct) => counter.value = ct;

const text = computed(() => `${t("content.msg1", counter.value)} ${counter.value || ''} ${t("content.product", counter.value)} ${t("content.msg2")}`);
</script>

<template>
    <header>
        <nav>
            <h1>{{ t('nav.title') }} (i18n)</h1>
            <select id="locale-select" v-model="locale">
                <option v-for="locale in availableLocales" :key="locale">{{ locale }}</option>
            </select>
        </nav>
    </header>
    <main>
        <Counter :counter="counter" @count-changed="handleCounterChange"/>
        <h3>{{ text }}</h3>
        <ul>
            <li>
                <h3>{{ t('content.shortDate') }}: {{ d(new Date(), 'short') }}</h3>
            </li>
            <li>
                <h3>{{ t('content.longDate') }}: {{ d(new Date(), 'long') }}</h3>
            </li>
        </ul>
        <h2>{{ t('content.number', 2) }}</h2>
        <h3>{{ n(2500.8967, 'currency') }}</h3>
        <h3>{{ n(3000000, 'decimal') }}</h3>
        <h3>{{ n(0.69, 'percent') }}</h3>
    </main>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
