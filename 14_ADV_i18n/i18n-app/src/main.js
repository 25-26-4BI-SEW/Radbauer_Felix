import {createApp} from 'vue'
import App from './App.vue'
import {createI18n} from 'vue-i18n'
import {locales, datetimeFormats, numberFormats} from "@/locales/index.js";


const i18n = createI18n({
    locale: 'en',
    messages: locales,
    datetimeFormats: datetimeFormats,
    numberFormats: numberFormats,
    legacy: false,
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');