import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {auth} from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import store from './store'


let app = null


onAuthStateChanged(auth, () => {
    if(!app) {
        app = createApp(App).use(store).use(router).mount('#app')
    }
})
