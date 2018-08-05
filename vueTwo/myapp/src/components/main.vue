<template>
  <div id="main">
  <div class="MainTenNet">
   <canvas ref='can' ></canvas>
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
   this.createdBorad();
  	console.log('主页');
  },
  methods:{
    createdBorad(){
      let ct = this.$refs.can;
      let cxt=ct.getContext("2d");
      cxt.fillStyle="#ff0000";
      cxt.fillRect(0,0,300,300);
      return this;
    }
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