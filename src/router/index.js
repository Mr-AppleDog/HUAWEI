import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';
import Main from "@/view/Main";
import AboutMe from "@/view/AboutMe";
import AccountInformation from"@/view/AccountInformation";
import AddressBook from"@/view/AddressBook";
import MyOrders from"@/view/MyOrders";
import Login from "@/view/Login";
import Register from "@/view/Register";
import Phone from "@/view/Phone";
import Computer from "@/view/Computer";
import Pad from "@/view/Pad";
import Cart from "@/view/Cart";
import Goods from "@/view/Goods";
import text from "@/view/text";
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: "/login", component: Login },
        {path: '/register', component: Register},
        {
            path: "/",
            component:Main,
            redirect:'/phone',
            children:[
                {
                    path: "/phone",
                    component: Phone,
                },
                {
                    path: '/computer',
                    component: Computer,
                },
                {
                    path: '/pad',
                    component: Pad,
                },
                {
                    path: "/cart",
                    component: Cart,
                    meta: { permission: true }
                },
                {
                    path:"/goods",
                    component:Goods,
                    meta:{permission: true }
                },
                {
                    path:"/text",
                    component:text,
                    meta:{permission: true }
                },
                {
                    path: '/aboutme',
                    component: AboutMe,
                    redirect: '/accountinformation',
                    children:[
                        {
                            path: '/accountinformation',
                            component: AccountInformation,
                            meta: { permission: true }
                        },
                        {
                            path: '/addressbook',
                            component: AddressBook,
                            meta: { permission: true }
                        },
                        {
                            path: '/myorders',
                            component: MyOrders,
                            meta: { permission: true }
                        }
                    ]
                },

            ]
        },
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.permission) {
        if (window.localStorage.getItem('token')) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
})
export  default  router
