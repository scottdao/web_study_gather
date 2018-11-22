<template>
	<div id="shopeCity">
		商城
		<div >
			{{timer}}s
		</div>
		<button @click="timerStart">start</button>
	</div>
</template>

<script>
	export default{
		name: 'ShopeCity',
		data(){
			return{
				timer:12,
				tFlag:true
			}
		},
		
		mounted(){
		
		},
		destroyed(){
			clearInterval(this.djs)
		},
		methods:{
			timerStart(){
			let t = this.timer;
			let $this = this;
			if(this.tFlag == true){
					this.djs = setInterval(function(){
						if(t>0){
							if(t<10){
								$this.timer = 0+''+t
							}else{
								$this.timer = t
							}
							t--;
						}else{
							$this.timer = 60;
							clearInterval(this.djs);
							this.tFlag = true
						}
					},1000)
					this.tFlag = false;
			
			}else{
				clearInterval(this.djs)
				this.tFlag = true
				$this.timer = 60
			}
		
		}
		}
	}
</script>

<style>
</style>