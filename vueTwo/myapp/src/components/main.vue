<template>
  <div id="main">
  <div class="MainTenNet">
        我是主页啦呀！
         <router-link to="/next">进入下一页</router-link>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data(){
  	return{

  	}
  },
 
  mounted(){
  
  	console.log('主页');
  },
  methods:{
   
  },
  components: {
   
  }
}
</script>

<style lang='scss' scoped>
#main{
	color:red;
  canvas{
    height:300px;
    width:300px;
  }
}
</style>