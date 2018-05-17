<template>
	<div id="leadIndex">
		{{msg}}
		<router-link to='/index'>
			<button >进入资产</button>
		</router-link>
		<button @click="clickEvent">my</button>
	</div>
</template>

<script>
	export default{
		name: 'LeadIndex',
		data(){
			return{
				msg:'引导页',
				console:console
			}
		},
		mounted(){
			//console.log('创建完成')
			
		},
		update(){
			
		},
		beforeDestroy(){
			console.log('销毁之前')
		},
		destroyed(){
			console.log('销毁')
		},
		
	   methods:{
	   	clickEvent(){
	   		console.log(111);
	   	}
	   }
	}
</script>

<style>
</style>