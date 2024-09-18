import { createI18n } from "vue-i18n";
import store from "../store/index.js"


import en from "./en";
import fr from "./fr";


let i18nInstance = null


export async function initializeI18n() {
    // Wait for the data to be loaded
    if (!store.getters.isDataLoaded) {
        await store.dispatch('loadDetails')
    }

    
    i18nInstance = createI18n({
        //locale: 'fr', // set default locale
        fallbackLocale: 'fr', // set fallback locale
        messages : {
            en : en(store),
            fr : fr(store)
        }
    })

    return i18nInstance
}

export function getI18nInstance() {
    return i18nInstance
}