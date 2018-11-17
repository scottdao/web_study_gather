<template>
  <div id="lookFor">
      查询
      <div class="bg"></div>
  </div>
</template>
<script>
export default {
  name: 'LookFor',
  data(){
  	return{
  		
  	}
  },
  mounted(){
			console.log('寻找耶')
		},
  components: {
   
  }
}
</script>

<style lang='scss' scoped>
  #lookFor{
    height:20px;
    width:10px;
    background:url('../image/bot_01.png');
  }
  .bg{
    height:40px;
    width:40px;
    background:url('../image/smrz_ico_scsfz.png');
  }
</style>
