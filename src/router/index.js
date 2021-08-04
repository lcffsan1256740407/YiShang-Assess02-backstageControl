// 导入Vue-router
import VueRouter from "vue-router";

// 导入路由组件
import NormList from "../pages/NormList.vue";
import CardList from "../pages/CardList.vue";

// 导入登录页面路由组件
import Login from "../Login.vue"
import User from "../components/User.vue"
import Phone from "../components/Phone.vue"

// 导入增加编辑路由组件
import Home from "../Home.vue"
import List from "../components/List.vue"
import Add from "../components/Add.vue"
import Edit from "../components/Edit.vue"

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 配置核心部分
const router = new VueRouter({
    routes: [
        //起始路由跳转到Login页面
        {
            name: 'login',
            path: "/login",
            component: Login,
            meta:{isAuth:false},

            children: [
                {
                    //跳转手机注册
                    name: 'phone',
                    path: "phone",
                    component: Phone,
                    meta:{isAuth:false}
                },
                {
                    //跳转用户名登录
                    name: 'user',
                    path: "user",
                    component: User,
                    meta:{isAuth:false}
                },
            ]
        },
        //跳转到Home页面
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta:{isAuth:true},
            children: [
                {
                    //跳转到CardList页面
                    name: 'cardlist',
                    path: "cardlist",
                    component: CardList,
                    meta:{isAuth:true},
                },
                {
                    //跳转到NormList页面
                    name: 'normlist',
                    path: "normlist",
                    component: NormList,
                    meta:{isAuth:true},
                    children:[
                        {
                            //跳转列表
                            name: 'list',
                            path: "list",
                            component: List,
                            meta:{isAuth:true},
                            props($route){
                                return {bigtitle:$route.query.bigtitle ,smalltitle:$route.query.smalltitle}
                            },
                        },
                        {
                            //跳转增加
                            name: 'add',
                            path: "add",
                            component: Add,
                            meta:{isAuth:true}
                        },
                        {
                            //跳转编辑
                            name: 'edit',
                            path: "edit",
                            component: Edit,
                            meta:{isAuth:true}
                        }
                    ]
                }
            ]
        },
        //跳转到404页面
        {
            path:'*',
            component: () => import("../components/Errors"),
            hidden: true
        }
    ]
})

// 全局前置路由守卫
router.beforeEach((to,from,next)=>{	
    if(to.meta.isAuth){
        if(localStorage.getItem("token") == null){
            alert("您没有权限访问")
        }else{
            next()
        }
    }else{
        next()
    }
})

export default router;