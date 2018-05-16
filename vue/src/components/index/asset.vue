<template>
	<div id="asset">
		自唱
		<button @click="add">+</button>
			<span>{{count}}</span>
		<button @click="min">-</button>
		<Details></Details>
		<button>提交</button>
	</div>
</template>

<script>
	import Details from './component/details';
	export default{
		name: 'Asset',
		data(){
			return{
				count:0
			}
		},
		props:['msg'],
		created(){
			
		},
		mounted(){
		
		},
		methods:{
			add(){
				this.$store.commit('increment',this.count);
				this.count = this.$store.state.count;
			},
			min(){
				this.$store.commit('decrement',this.count);
				this.count = this.$store.state.count;
			}
		},
		components:{
			Details
		}
	}
</script>

<style>
</style>