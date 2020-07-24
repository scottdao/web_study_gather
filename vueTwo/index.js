// class MyRouter {
//   constructor() {
//     this.current = null;
//   }
// }
class Vue {
  constructor(params){
    this.el = params.el;
    this.data = params.data;
    this.playLayout(params)
    this.parseAst()
  }
  createElement(id){}
  getElement(id){
    return document.querySelector(id);
  }
  parseAst(html){
    let ele = this.getElement(this.el);
    let ele_str = ele.outerHTML;
    ele_str = ele_str.trim();
    // while(ele_str){

    // }
  }
  playLayout(params){
    // const root = document.getElementById(params.el);
    // let text = root.innerText;
    // console.log(root.prototype)
    // const wd = text.replace(/^({{)(.+)(}})$/g, '$2');
    // root.innerHTML = params.data[wd];
  }

}
Vue.prototype.$mount = function(el){
  if(this.el === undefined){
    this.el = el
  }
}
