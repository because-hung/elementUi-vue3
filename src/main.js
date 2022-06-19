import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import zhTW from 'element-plus/es/locale/lang/zh-tw'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhTW
})

app.use(store).use(router).mount('#app')
