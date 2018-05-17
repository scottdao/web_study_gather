<template>
	<div id="asset">
		<button @click="add">+</button>
			<span>{{count}}</span>
		<button @click="min">-</button>
		<Details></Details>
		<button @click="getInfo">提交</button>
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
				this.$store.dispatch('increment',this.count)
				this.count = this.$store.state.addMin.count;
			},
			min(){
				this.$store.dispatch('decrement',this.count);
				this.count = this.$store.state.addMin.count;
			},
			getInfo(){
				this.http.log(this.$store.state.formInfo.info,1);
			}
		},
		components:{
			Details
		}
	}
</script>

<style>
</style>