import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useTokenStore } from '@/stores/token';
import router from '@/router';

// baseURL这样配置是为了解决跨域问题，详细看vite.config.js
const baseURL = '/api';
const instance = axios.create({ baseURL })

// 请求拦截器
instance.interceptors.request.use(
    // 请求前的回调
    config => {
        const tokenStore = useTokenStore();
        // 如果有token，就添加到请求头中
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token
        }
        return config;
    },

    // 请求错误的回调
    err => {
        Promise.reject(err)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    result => {
        if (result.data.code === 0) {
            return result.data;
        }
        // 使用ElMessage.error代替alert样式更好看
        ElMessage.error(result.data.message ? result.data.message : '服务异常');
        return Promise.reject(result.data);
    },
    err => {
        // 判断响应状态码，如果未登录，则提示并跳转到登陆页面
        if (err.response.status === 401) {
            ElMessage.error('请先登录')
            router.push('/login')
        } else {
            ElMessage.error('服务异常');
        }
        return Promise.reject(err); // 异步操作的状态转换为失败
    }
)

export default instance;
