import Vue from 'vue'
import Router from 'vue-router'
import LeadIndex from '@/components/lead/leadIndex'
import Index from '@/components/index/index'
import Main from '@/components/index/main'
import LookFor from '@/components/index/lookFor'
import Backpack from '@/components/index/backpack'
import Mine from '@/components/index/mine'
import ShopCity from '@/components/index/shopCity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LeadIndex',
      component: LeadIndex
    },
		{
		  path: '/index',
		  name: 'Index',
		  component: Index,
		  redirect: '/main',//默认路由
		  children:[//二级路由
		  	  {
				      path: '/main',
				      name: 'Main',
				      component: Main
				    },
				    {
				      path: '/lookFor',
				      name: 'LookFor',
				      component: LookFor
				    },
				     {
				      path: '/backpack',
				      name: 'Backpack',
				      component: Backpack
				    },
				    {
				      path: '/shopCity',
				      name: 'ShopCity',
				      component: ShopCity
				    },
				    {
				      path: '/mine',
				      name: 'Mine',
				      component: Mine
				    }
		  ]
		}
  ]
})
