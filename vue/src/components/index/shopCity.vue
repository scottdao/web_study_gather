<template>
	<div id="shopeCity">
		商城
	</div>
</template>

<script>
	export default{
		name: 'ShopeCity',
		data(){
			return{
				
			}
		},
		activated(){
			console.log('ShopeCity缓存啦')
		},
		deactivated(){
			console.log('ShopeCity停用啦')
		}
	}
</script>

<style>
</style>