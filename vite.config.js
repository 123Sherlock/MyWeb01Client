import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  ,
  // 自定义配置
  server: {
    // 由于浏览器的同源策略限制，向不同源（不同协议，不同域名，不同端口）发送AJAX请求会失败
    // 客户端的端口为5173，服务端的端口为8080
    // 因此需要配置代理，浏览器保持5173的端口不变，先发送给客户端，再让客户端转发给服务器即可
    proxy: {
      '/api': { // 获取路径中包含了/api的请求
        target: 'http://localhost:8080', // 服务端的源
        changeOrigin: true, // 修改源
        rewrite: (path) => path.replace(/^\/api/, '') // 把/api替换为''
        // 例如localhost:5173/api/user/login会变成localhost:8080/user/login即服务端地址
      }
    }
  }
})
