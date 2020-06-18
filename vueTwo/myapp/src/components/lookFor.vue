<template>
  <div id="lookFor">
      查询
      <div class="bg">
				<input type="text" v-model="job"></input>
				{{job}}
			</div>
  </div>
</template>
<script>
export default {
  name: 'LookFor',
  data(){
  	return{
  		job:'1234'
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
 
</style>
