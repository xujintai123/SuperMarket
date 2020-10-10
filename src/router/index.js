import Vue from 'vue'
import VueRouter from 'vue-router'

// 1、安装插件
Vue.use(VueRouter)

// 在vue项目中点击两次路由切换
// 原因：
// 多次点击跳转同一个路由是不被允许的
// 解决方案（两种）：
// 1.降低版本：切换版本回3.0版本
// 2.重写规则：在你引了vue-router的js文件里加上如下代码即可（我的在index.js文件）
//push ()
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const Cart = () => import('views/cart/Cart')
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// import Home from '@/views/home/Home'
// import Profile from '@/views/profile/Profile'
// import Category from '@/views/category/Category'
// import Cart from '@/views/cart/Cart'
// import Detail from '@/views/detail/Detail'

// 2、创建router
const routes = [
  {
    path: '/',
    redirect: '/Home/'
  }
  , {
    name: 'Home',
    path: '/Home/',
    component: Home
  },
  {
    name: 'Category',
    path: '/Category/',
    component: Category
  },
  {
    name: 'Profile',
    path: '/Profile/',
    component: Profile
  },
  {
    name: 'Cart',
    path: '/Cart/',
    component: Cart
  }, {
    name: 'Detail',
    path: '/Detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router