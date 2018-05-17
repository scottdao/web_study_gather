<template>
	<div id="app">
	<keep-alive :include="['Index']">
		<!--
			LeadIndex页面进行缓存
			
			exclude属性表示该页面没有被缓存,通过逗号隔开进行革除缓存处理
			:exclude="['LeadIndex','Asset']"也能通过动态缓存处理；
			
			include缓存处理，需要缓存的组件；
			:include="['LeadIndex']"
		-->
		<router-view/>
	</keep-alive>
	</div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return{
		}
	}
}
</script>

<style lang="css">
	body,html,div,ul,ol,li,a,h2,h1,h3,h4,h5,h6,p{
		margin: 0;
		padding: 0;
	}
	body{
		height: 100%;
		width: 100%;
		background-color: rgb(244,244,244);
	}
</style>
