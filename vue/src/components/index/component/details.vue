<template>
	<div id="detail">
		<input type="text"  v-model="detail" @change="getInfo" />
	</div>
</template>

<script>
	export default{
		name: 'Asset',
		data(){
			return{
				detail:''
			}
		},
		methods:{
			getInfo(){
				this.http.log(this.detail,1)
			}
		}
		
	}
</script>

<style>
</style>