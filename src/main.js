import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles/styles.css'

const app = createApp(App)
app.use(router)
app.use(AOS)
app.mount('#app')