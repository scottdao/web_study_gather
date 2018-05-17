<template>
	<div id="detail">
		<input type="text"  v-model="detail"  />
		<input type="number" v-model="age"  /> 
	</div>
</template>

<script>
	export default{
		name: 'Asset',
		data(){
			return{
				info:{},
				
			}
		},
		computed:{
			detail:{
				get(){
					
				},
				set(value){
					this.http.log(value,1);
					this.info.detail = value
					this.$store.commit('getInfo',this.info);
				}
			},
			age:{
				get(){
					
				},
				set(value){
					this.info.age = value
					this.$store.commit('getInfo',this.info);
				}
			}
		},
		methods:{
			getInfo(){
//				this.info.detail = this.detail
//				this.info.age = this.age
//				this.http.log(this.info,1)
				
			}
		}
		
	}
</script>

<style>
</style>