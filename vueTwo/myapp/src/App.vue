<template>
  <div id="app">
    <keep-alive :index="['Index']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
//console.log(111);
export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
