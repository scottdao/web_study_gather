<template>
  <div id="main">

   <canvas ref='can' ></canvas>
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
  	console.log(this.$refs.can);
  	console.log('主页');
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