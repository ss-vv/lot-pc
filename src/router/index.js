import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		component: resolve => require(['~/Main.vue'],resolve),
		children:[
			{path:'/k3/official',component: resolve => require(['@/k3/official'],resolve)},
			{path:'/k3/tradition',component: resolve => require(['@/k3/tradition'],resolve)},
			{path:'/keno',component: resolve => require(['@/keno'],resolve)},
			{path:'/kl10',component: resolve => require(['@/kl10'],resolve)},
			{path:'/lhc',component: resolve => require(['@/lhc'],resolve)},
			{path:'/pk10/official',component: resolve => require(['@/pk10/official'],resolve)},
			{path:'/pk10/tradition',component: resolve => require(['@/pk10/tradition'],resolve)},
			{path:'/pl3',component: resolve => require(['@/pl3'],resolve)},
			{path:'/ssc/official',component: resolve => require(['@/ssc/official'],resolve)},
			{path:'/ssc/tradition',component: resolve => require(['@/ssc/tradition'],resolve)},
			{path:'/xy28',component: resolve => require(['@/xy28'],resolve)},
			{path:'/home',component:resolve => require(['@/home'],resolve)},// 首页
			{path:'',component:resolve => require(['@/home'],resolve)},// 首页
			{path:'/download',component:resolve => require(['@/download'],resolve)},// 下载页
			
		]
	}
]

const router = new VueRouter({
  routes
})

export default router