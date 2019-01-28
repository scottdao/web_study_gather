import { observable, computed, action } from 'mobx'
console.log(observable)

 observable({
       text: "测试双向绑定",
        num: 22
   })
class CreateStore {
   //@observable text = '';
  
//    
//    @observable num = 0
// 
//    @computed get msg() {
//     return this.text
//   }
// 
//     @action changeMsg(val) {
//     this.text = val
//   }
// 
//    @action addNum() {
//     this.num += 1
//   }
}

const createStore = new CreateStore()

export default createStore