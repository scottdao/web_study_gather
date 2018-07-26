<template>
  <div id="index">
  	<keep-alive :include='["LookFor"]'>
  		<!-- LookFor组件被缓存 -->
	  	 <router-view/>
	</keep-alive>
   <router-link to="/main">首页</router-link>
   <router-link to="/lookFor">商城</router-link>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data(){
  	return{

  	}
  },
  mounted(){
			console.log('创建完成')
			
		},
  components: {
   
  },

}
</script>

<style scoped lang='css'>
	#index a{
		
			color: blue;
		
		
	}
</style>
