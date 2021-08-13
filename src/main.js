import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import IconifyIcon from '@iconify/vue'
import logoutBoxLine from '@iconify/icons-ri/logout-box-line';

const app = createApp(App)
app.use(IconifyIcon)
app.use(logoutBoxLine)
app.use(vuetify)
app.use(router)
app.mount('#app')
