import { createApp } from 'vue'
import './style.css'

import { initializeI18n } from './lang/index.js'
import App from './App.vue'
import store from "./store/index.js"

async function initializeApp() {

    const i18n = await initializeI18n();
    const app = createApp(App);
    app.use(store);
    app.use(i18n);
    app.mount('#app');
}

initializeApp()