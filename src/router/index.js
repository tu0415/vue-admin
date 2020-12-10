import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect:'console',
        hidden:true,
        meta:{
            name:'主页'
        }
    },
    {
        path: "/login",
        name: "login",
        hidden:true,
        meta:{
            name:'登录'
        },
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/console",
        name: "console",
        redirect:'index',
        meta:{
            name:'基础管理'
        },
        component: () => import("@/views/basics/index.vue"),
        children:[
           {
            path: "/index",
            name: "index",
            component: () => import("@/views/console/index.vue"),
            meta:{
                name:'首页'
            },
           }
        ]
    }
   
];

const router = new VueRouter({
    routes
});

export default router;
