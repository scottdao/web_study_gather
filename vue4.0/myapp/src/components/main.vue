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
    var ct = this.$refs.can;
    var cxt=ct.getContext("2d");
    cxt.fillStyle="#fff";
    cxt.fillRect(0,0,300,300);
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