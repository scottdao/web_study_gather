<template>
	<div id="asset">
		交易页面
		<money :num='num' @min='min' @dataMy='dataMy'></money>
		<button @click="add">+</button>
		<p>{{msg.name}}</p>
		<p>我是子级：{{dataI}}</p>
		<p>{{content}}</p>
	</div>
</template>

<script>
	import Money from './component/money'
	export default{
		name: 'Backpack',
		data(){
			return{
				num:0,
				dataI:0,
				content:''
			}
		},
		props:['msg'],
		watch:{
			
		},
		methods:{
			dataMy(id){
				this.http.log(id);
				this.content=id
			},
			add(){
				this.num++;
			},
			min(id){
				//this.num = id
				this.http.log(id)
				this.dataI = id
			}
		},
		computed:{
			
		},
		created(){
			
		},
		mounted(){
			this.http.log(this.msg,1);
		},
		components:{
			Money
		}
	}
</script>

<style>
</style>