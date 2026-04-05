import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import setPrimeVue from '@/modules/primevue.modules'

const app = createApp(App)

setPrimeVue(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
//o que está dentro do index.html, o id="app" é onde o Vue vai montar a aplicação, ou seja, onde o Vue vai renderizar os componentes.
