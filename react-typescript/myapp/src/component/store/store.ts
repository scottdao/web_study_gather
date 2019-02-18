import { observable, action } from 'mobx';

// 定义数据结构
class Store {
  // ① 使用 observable decorator 
  @observable a:number = 0;
}
// 定义对数据的操作
class Actions {
  public store:any;
  constructor({store}) {
    this.store = store;
  }
  // ② 使用 action decorator 
  @action
  incA = () => {
    this.store.a++;
  }
  @action
  decA = () => {
    this.store.a--;
  }
}
// ③实例化单一数据源
const store = new Store();
// ④实例化 actions，并且和 store 进行关联
const actions = new Actions({store});

 
export {actions, store} 