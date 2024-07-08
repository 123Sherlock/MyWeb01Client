// 导入Vue路由，需要先使用npm install vue-router@4安装，@后面是版本号
import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'

import ArticleManageVue from '@/views/article/ArticleManage.vue'
import ArticleCategoryVue from '@/views/article/ArticleCategory.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'

// 定义路由关系，即URL和其访问页面的对应关系
const routes = [
    { path: '/login', component: LoginVue },
    {
        // 使用children配置子路由，使用redirect在访问该路由时重定向到指定的子路由
        path: '/', component: LayoutVue, redirect: '/article/manage', children: [
            { path: '/article/manage', component: ArticleManageVue },
            { path: '/article/category', component: ArticleCategoryVue },
            { path: '/user/info', component: UserInfoVue },
            { path: '/user/avatar', component: UserAvatarVue },
            { path: '/user/resetPassword', component: UserResetPasswordVue }
        ]
    }
]

// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
