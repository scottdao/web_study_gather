<template>
	<div id="index">
		<keep-alive :include="['LookFor']">
			<router-view :msg='msg'></router-view>
		</keep-alive >
		<ul class="nav-bottom">
			<router-link v-for='(item,index) in bottomNav'   :key='index'  :class='{active:activeI==index}' :to='item.link'>
				<li @click="()=>{activeI=index}">
					<div class="nav-bg" :class="{['navBg'+index]:true,navBgPs:activeI==index}">
					</div>
					<p>{{item.name}}</p>
				</li>
			</router-link>
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
				},
				activeI:this.$route.query.id || 0,
				console:console,
				bottomNav:[{
							name:'主页',
							link:'/main?id=0'
						  },
						  {
						  	name:'发现',
						  	link:'/lookFor?id=1'
						  },
						  {
						  	name:'背包',
						  	link:'/backpack?id=2'
						  },
						  {
						  	name:'商城',
						  	link:'/shopCity?id=3'
						  },
						  {
						  	name:'个人',
						  	link:'/mine?id=4'
						  }]
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
		-webkit-tap-highlight-color:rgba(0,0,0,0);
	}
	.bg(@x) when (default()) {
		  background-image: @x;
		  background-repeat: no-repeat;
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
		.nav-bg{
			height: 30px;
			width: 30px;
			background-size: cover;
    		background-position: 1px 2px;
		}
		.navBg0{
			.bg(url('../../assets/images/bot_01.png'));
		}
		.navBgPs{
			background-position: 1px -27px;
		}
		.navBg1{
			.bg(url('../../assets/images/bot_02.png'));
		}
		.navBg2{
			.bg(url('../../assets/images/bot_03.png'));
		}
		.navBg3{
			.bg(url('../../assets/images/bot_04.png'));
		}
		.navBg4{
			.bg(url('../../assets/images/bot_05.png'));
		}
		a{
			color: #333;
		}
		p{
			height: 50%;
			line-height: 30px;
		}
		li{
			font-size: 14px;
			font-family: "microsoft sans serif";
			height: 100%;
		}
		.active{
			color: rgb(135,109,254);
		}
	}
</style>