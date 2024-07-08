import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入Vue路由，默认命名为index.js，如果不使用这个名字，则需要写出导入的文件名
import Router from '@/router'
import App from './App.vue'
// Pinia是Vue官方提供的可在组件之间共享数据的库，使用前需要npm install pinia
import { createPinia } from 'pinia'
// Pinia的持久化插件，使用前需要npm install pinia-persistedstate-plugin
import { createPersistedState } from 'pinia-persistedstate-plugin'
// Element-Plus的语言本地化，如分页栏里的文字
import locale from 'element-plus/dist/locale/zh-cn'

const app = createApp(App)
app.use(ElementPlus, {locale})
app.use(Router)

const pinia = createPinia()
const persist = createPersistedState()
pinia.use(persist)

app.use(pinia)
app.mount('#app')
