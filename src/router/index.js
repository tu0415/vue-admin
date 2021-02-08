import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import basics from '@/views/basics'

const routes = [
    {
        path: "/",
        redirect: 'console',
        hidden: true,
        meta: {
            name: '主页'
        }
    },
    {
        path: "/login",
        name: "login",
        hidden: true,
        meta: {
            name: '登录'
        },
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/console",
        name: "console",
        redirect: 'index',
        meta: {
            name: '基础管理',
            icon:'el-icon-setting'
        },
        component:basics,
        children: [
            {
                path: "/console/index",
                name: "index",
                component: () => import("@/views/console/allocation.vue"),
                meta: {
                    name: '配置管理'
                },
            },
            {
                path: "/console/banner",
                name: "banner",
                component: () => import("@/views/console/banner.vue"),
                meta: {
                    name: 'banner图管理'
                },
            }
        ]
    },
    {
        path: "/goods",
        name: "goods",
        redirect: 'index',
        meta: {
            name: '商品管理',
            icon:'el-icon-goods'
        },
        component:basics,
        children: [
            {
                path: "/goods/goodsIndex",
                name: "goodsIndex",
                component: () => import("@/views/goods/goods.vue"),
                meta: {
                    name: '商城商品'
                },
            },
            {
                path: "/goods/prefecture",
                name: "prefecture",
                component: () => import("@/views/goods/prefecture.vue"),
                meta: {
                    name: '商品专区'
                },
            },
            {
                path: "/goods/classify",
                name: "classify",
                component: () => import("@/views/goods/classify.vue"),
                meta: {
                    name: '商品分类'
                },
            },

        ]
    },
    {
        path: "/order",
        name: "order",
        redirect: 'index',
        meta: {
            name: '订单管理',
            icon:'el-icon-document'
        },
        component:basics,
        children: [
            {
                path: "/order/orderIndex",
                name: "orderIndex",
                component: () => import("@/views/order/index.vue"),
                meta: {
                    name: '主订单管理'
                },
            },
            {
                path: "/order/orderDetail",
                name: "orderDetail",
                component: () => import("@/views/order/orderDetail.vue"),
                meta: {
                    name: '订单明细'
                },
            },
            {
                path: "/order/orderOperation",
                name: "orderOperation",
                component: () => import("@/views/order/orderOperation.vue"),
                meta: {
                    name: '订单操作记录'
                },
            },

        ]
    },
    {
        path: "/user",
        name: "user",
        meta: {
            name: '会员管理',
            icon:'el-icon-user'
        },
        component:basics,
        children: [
            {
                path: "/userIndex",
                name: "userIndex",
                component: () => import("@/views/user/index.vue"),
                meta: {
                    name: '会员管理'
                },
            },
            {
                path: "/address",
                name: "address",
                component: () => import("@/views/user/address.vue"),
                meta: {
                    name: '会员收货地址'
                },
            },
            {
                path: "/feedback",
                name: "feedback",
                component: () => import("@/views/user/feedback.vue"),
                meta: {
                    name: '会员反馈'
                },
            },
            {
                path: "/extractRecord",
                name: "extractRecord",
                component: () => import("@/views/user/extractRecord.vue"),
                meta: {
                    name: '会员提取记录'
                },
            }, 
            {
                path: "/balanceRecord",
                name: "balanceRecord",
                component: () => import("@/views/user/balanceRecord.vue"),
                meta: {
                    name: '会员余额记录'
                },
            },
            {
                path: "/rechargeRecord",
                name: "rechargeRecord",
                component: () => import("@/views/user/rechargeRecord.vue"),
                meta: {
                    name: '会员充值记录'
                },
            },
            {
                path: "/dividendsRecord",
                name: "dividendsRecord",
                component: () => import("@/views/user/dividendsRecord.vue"),
                meta: {
                    name: '会员充值记录'
                },
            },

        ]
    }

];

const router = new VueRouter({
    routes,
   
});






export default router;
