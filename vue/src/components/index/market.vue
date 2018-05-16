<template>
	<div id="market">
		行情页面
	</div>
</template>

<script>
	export default{
		name: 'Market',
		data(){
			return{
				
			}
		},
		activated(){
			console.log('market缓存啦')
		},
		deactivated(){
			console.log('market停用啦')
		}
	}
</script>

<style>
</style>