import Vue from 'vue/dist/vue'
import Router from 'vue-router'

const Index = () => import('@/components/index')
const Main = () => import('@/components/main')
const LookFor = () => import('@/components/lookFor')
Vue.use(Router)
let r = new Router({
	mode:'hash',
	 routes: [
	 		{
	 		path: '/',
		  	name: 'Index',
		 	component: Index,
			redirect: '/main',
			children:[
				{
			      path: '/main',
			      name: 'Main',
			      component: Main
				},
				{
			      path: '/lookFor',
			      name: 'LookFor',
			      component: LookFor
				}
			]
	 	}
	 ]
})
export default r