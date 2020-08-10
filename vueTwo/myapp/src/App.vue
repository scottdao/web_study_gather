<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click="parentClick">父级节点</button>
    <solt />
    <nodeB />
    <nodeC />
    <nodeA />
    <vNOde :myData="selfName" name='123'/>
    <parent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import solt from './test/solt/solt';
import nodeB from './test/node/nodeB';
import nodeA from './test/node/nodeA';
import nodeC from './test/node/nodeC';
import parent from './page/parent';
export default {
  name: 'App',
  data(){
    return {
      selfName:123
    }
  },
  components: {
    parent,
    solt,
    nodeB,
    nodeA,
    nodeC,
    vNOde:{
        functional: true,
        render(h, cxt) {
          console.log( cxt)
          return <div>1111:{cxt.props.name}</div>
        }
    }
    // HelloWorld
  },
  methods: {
    parentClick(){

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
