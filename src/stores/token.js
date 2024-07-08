import { defineStore } from "pinia"
import { ref } from "vue"

/*
使用Pinia来跨组件存储状态，需要先在main.js导入
第一个参数是名字，唯一性
第二个参数是一个函数，定义需要用到的内容

返回值是一个函数，可以通过它调用到函数里面的内容
惯例命名是useXXXStore
*/
export const useTokenStore = defineStore('token',
    () => {
        // 定义响应式变量，初始值为空字符串
        const token = ref('')

        // 定义一个函数，修改token的值
        const setToken = (newToken) => {
            token.value = newToken
        }

        // 定义一个函数，移除token的值
        const removeToken = () => {
            token.value = ''
        }

        // 返回给外部使用
        return {
            token, setToken, removeToken
        }
    },
    {
        // 设置持久化，浏览器刷新后仍然存在
        persist: true
    }
)
