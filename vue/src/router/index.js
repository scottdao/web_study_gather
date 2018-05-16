import Vue from 'vue'
import Router from 'vue-router'
import LeadIndex from '@/components/lead/leadIndex'
import Index from '@/components/index/index'
import Asset from '@/components/index/asset'
import Market from '@/components/index/market'
import Transation from '@/components/index/transation'
import Mine from '@/components/index/mine'
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
		  redirect: '/asset',//默认路由
		  children:[//二级路由
		  	  {
				      path: '/asset',
				      name: 'Asset',
				      component: Asset
				    },
				    {
				      path: '/market',
				      name: 'Market',
				      component: Market
				    },
				     {
				      path: '/transation',
				      name: 'Transation',
				      component: Transation
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
