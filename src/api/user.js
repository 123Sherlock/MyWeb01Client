import request from '@/utils/requst.js'

// 用户注册
export const userRegisterService = (registerData) => {
    // 如果直接传递registerData，会自动转换为JSON
    // 由于服务端接口的参数类型是queryString，所以通过URLSearchParams来拼接参数
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params);
}

// 用户登录
export const userLoginService = (loginData) => {
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key]);
    }
    return request.post('/user/login', params);
}

// 获取用户信息
export const userInfoService = () => {
    return request.get('/user/userInfo')
}

// 修改用户信息
export const userInfoUpdateService = (userInfoData) => {
    return request.put('/user/update', userInfoData)
}

// 修改头像
export const userIconUpdateService = (iconUrl) => {
    const params = new URLSearchParams()
    params.append('iconUrl', iconUrl)
    return request.patch('/user/updateIcon', params)
}
