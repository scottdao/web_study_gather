import { observable, computed, action } from 'mobx';

class CreateStore {
	@observable text:string = '';    
    @observable num:number = 0;
	@computed 
	public get msg() {
		return this.text;
	}
    @action 
	public changeMsg(val:string) {
		this.text = val;
	}
   @action
	public addNum() {
		this.num += 1;
	}
}

const createStore = new CreateStore()
 
export default createStore