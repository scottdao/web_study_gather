<template>
	<div >
		金钱效益
		<!--<span >{{numTwo}}</span>-->
		<button @click="min">-</button>
		<p>我是父级传下来的:{{num}}</p>
	</div>
</template>

<script>
	
	export default{
		name: 'Money',
		data(){
			return{
				numTwo:0
			}
		},
		props:["num"],
		mounted(){
			this.$emit('dataMy','我是')
		},
		methods:{
			min(){
				this.numTwo--;
				this.$emit('min',this.numTwo)
			}
		},
		computed:{
			
		}
	}
</script>

<style>
</style>