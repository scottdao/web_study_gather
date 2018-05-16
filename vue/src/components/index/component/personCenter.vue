<template>
	<div id="person">
		<span>personCenter</span>
		<slot name='per'></slot>
		<slot name='mine'></slot>
		<h2>{{msg}}</h2>
		<!--<slot></slot>-->
	</div>
</template>

<script>
	
	export default{
		name: 'PersonCenter',
		data(){
			return{
				msg:'未知'
			}
		}
	}
</script>

<style>
</style>