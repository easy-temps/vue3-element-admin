import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(ElementPlus, { size: 'small', zIndex: 3000})
  .use(createPinia())
  .mount('#app')
