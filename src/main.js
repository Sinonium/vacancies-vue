import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { onAuthStateChanged } from "firebase/auth"
import {auth} from './firebase/config'

let app = null;

onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app');
    }
})


