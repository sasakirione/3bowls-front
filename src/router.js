import Vue from 'vue'
import Router from 'vue-router'
import  Home from './views/Home'
import Search from "@/views/Search";
import Recommend from "@/views/Recommend";
import Login from "@/views/Login";
import MyPage from "@/views/MyPage";
import About from "@/views/About";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/recommend',
            name: 'Recommend',
            component: Recommend
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/my-page',
            name: 'MyPage',
            component: MyPage
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})