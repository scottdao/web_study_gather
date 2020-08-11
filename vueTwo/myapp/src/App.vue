<template>
  <div id="app">
   <a-tabs default-active-key="1" >
      <a-tab-pane key="1" tab="插槽">
         <solt >
          <template  >
              dlkj
          </template>
        </solt>
      </a-tab-pane>
      <a-tab-pane key="2" tab="父级兄弟子级组件数据传递" force-render>
         <button @click="parentClick">父级节点</button>
          <parent />
          <nodeB />
          <nodeC />
          <nodeA />
      </a-tab-pane>
      <a-tab-pane key="3" tab="函数式组件">
        <vNOde :myData="selfName" name='123'/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="vuex及vuex的内部实现">
          <a-button @click="addClickData">+</a-button>
          <a-button @click="minClickData">-</a-button>
          <div>
            {{$minStore.state.count}}
          </div>
      </a-tab-pane>
      <a-tab-pane key="5" tab="测试">
          <a-button>测试</a-button>
         
         测试
      </a-tab-pane>
    </a-tabs>
    
   
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
        render(createElement, cxt) {
         //  console.log( cxt)
          return <div>1111:{cxt.props.name}</div>
        }
    }
    // HelloWorld
  },
  mounted() {
    // console.log(this.$minStore)
  },
  methods: {
    addClickData(){
        this.$minStore.commit('COUNT')
    },
    minClickData(){
       this.$minStore.commit('MIN')
    },
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
