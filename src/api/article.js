import request from '@/utils/requst.js'
import { useTokenStore } from '@/stores/token'

// 文章分类列表
export const articleCategoryListService = () => {
    // 从Pinia中取出token并在发送请求时携带到请求头
    const tokenStore = useTokenStore();
    // 在Pinia中定义的响应式数据在使用时都不需要.value
    return request.get('/article/list', { headers: { 'Authorization': tokenStore.token } })
    // 这种写法需要在每个请求里都加上，非常繁琐，推荐在request.js里使用拦截器统一处理
}

// 添加文章分类
export const articleCategoryAddService = categoryData => {
    return request.post('/category', categoryData)
}

// 修改文章分类
export const articleCategoryUpdateService = categoryData => {
    return request.put('/category', categoryData)
}

// 删除文章分类
export const articleCategoryDeleteService = id => {
    return request.delete('/category?id=' + id)
}

// 查询文章列表
export const articleListService = params => {
    // 当请求参数类型为QueryString时需要这样传递
    return request.get('/article', { params: params })
}

// 添加文章
export const articleAddService = articleData => {
    return request.post('/article', articleData)
}
