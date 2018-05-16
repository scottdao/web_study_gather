<template>
	<div id="index">
		<keep-alive :include="['Market']">
			<router-view :msg='msg'></router-view>
		</keep-alive >
		<ul class="nav-bottom">
			<router-link to='/asset'>
				<li>资产</li>
			</router-link>
			<router-link to='/market'>
				<li>行情</li>
			</router-link >
			<router-link to='/transation'>
				<li>交易</li>
			</router-link>
			<router-link to='/mine'>
				<li>我的</li>
			</router-link >
		</ul>
	</div>
</template>

<script >
	export default{
		name: 'Index',
		data(){
			return{
				msg:{
					id:1,
					name:'scott',
					age:18
				}
			}
		},
		mounted(){
//			this.http.post('/V2/GoodTerm',{token:123},(res)=>{
//				console.log(res)
//			})
		}
	}
</script>

<style scoped lang="less">
	ul {
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.nav-bottom{
		display: flex;
		display: -webkit-flex;
		justify-content:space-around;
		position: fixed;
		height: 60px;
		width: 100%;
		bottom: 0;
		line-height: 60px;
		background-color: #fff;
		border-top: 1px solid rgba(0,0,0,.12);
		a{
			color: #333;
		}
		li{
			
		}
	}
</style>