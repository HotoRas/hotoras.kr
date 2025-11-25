import { createApp } from 'vue'
import { router } from './route.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
