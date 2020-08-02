import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home"
Vue.use(Router) //регистрация Router как плагин

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        component: Home,
        },
        {
            path: '/queue',
            component: () => import("./views/Queue.vue"),
        }
    ]
})
