import Vue from "vue";
import Router from "vue-router";
Vue.use(Router)
export default new Router({
    mode: "history", // history 模式去除地址栏 # 号
    routes:[
        // 一级路由，渲染到 App.vue 中的 <router-view />
		{
			// http://127.0.0.1:8080/#/
			path: "/",
			name: "",
			redirect: "/login",
			meta: { requireAuth: false },
		},
        {
			// http://127.0.0.1:8080/#/login
			path: "/login",
			name: "Login",
			component: () => import("@/components/backed/Login.vue"),
			meta: { requireAuth: false },
		},
        {
			// http://127.0.0.1:8080/#/
			path: "/dashboard",
			name: "系统首页",
			redirect: "/index",
			component: () => import("@/components/Layout.vue"),
			// 	// 二级路由，渲染到该组件中的 <router-view />
			children: [
				{
					// http://127.0.0.1:8080/#/index
					path: "/index",
					name: "index",
					// component: Dashboard
					// ES6 箭头函数写法
					component: () => import("@/components/common/Index.vue"),
					// meta: { requireAuth: true },
				},
			],
		},
		{
			// http://127.0.0.1:8080/#/login
			path: "/manage",
			name: "员工",
			
			component: () => import("@/components/Layout.vue"),
			children: [
				{
					// http://127.0.0.1:8080/#/index
					path: "/manage",
					name: "manage",
					// component: Dashboard
					// ES6 箭头函数写法
					component: () => import("@/components/backed/Manager.vue"),
					// meta: { requireAuth: true },
				},
			],
			
		},
		{
			// http://127.0.0.1:8080/#/login
			path: "/productManage",
			name: "商品管理",
			
			component: () => import("@/components/Layout.vue"),
			children: [
				{
					// http://127.0.0.1:8080/#/index
					path: "/productManage/products",
					name: "products",
					// component: Dashboard
					// ES6 箭头函数写法
					component: () => import("@/components/backed/Product.vue"),
					// meta: { requireAuth: true },
				},
				{
					// http://127.0.0.1:8080/#/index
					path: "/productManage/hotProducts",
					name: "hotProducts",
					// component: Dashboard
					// ES6 箭头函数写法
					component: () => import("@/components/backed/HotProduct.vue"),
					// meta: { requireAuth: true },
				},
				{				
					path: "/productManage/newProducts",
					name: "newProducts",
					component: () => import("@/components/backed/NewProducts.vue"),
					// meta: { requireAuth: true },
				},
			],
			
		},
		{
			// http://127.0.0.1:8080/#/login
			path: "/order",
			name: "订单",
			
			component: () => import("@/components/Layout.vue"),
			children: [
				{
					// http://127.0.0.1:8080/#/index
					path: "/order",
					name: "order",
					// component: Dashboard
					// ES6 箭头函数写法
					component: () => import("@/components/backed/Order.vue"),
					// meta: { requireAuth: true },
				},
			],
			
		},

    ]
})