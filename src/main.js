import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../plugins/fontawsome'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhTW
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).mount('#app')
