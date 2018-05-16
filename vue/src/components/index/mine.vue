<template>
	<div id="mine">
	<PersonCenter>
			<span slot='per'>{{msg}}</span>
			<h2 slot='mine'>我的未来</h2>
			<h1>疯狂的世界反</h1>
	</PersonCenter>
	</div>
</template>

<script>
	import PersonCenter from './component/personCenter'
	export default{
		name: 'Mine',
		data(){
			return{
				msg:'个人中心'
			}
		},
		components:{
			PersonCenter
		}
	}
</script>

<style>
</style>