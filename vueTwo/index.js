// class MyRouter {
//   constructor() {
//     this.current = null;
//   }
// }
class operateDom{
  static rootId = null;
  static  getElement(id){
      id = id || this.rootId;
      return document.querySelector(id);
  }
  static createElement(id){}
}
class EventConfig{

}
class elementNodes{
  constructor(params){
    this.elements = params.elements;
  }
}
class Vue extends EventConfig{
  constructor(params){
    super(params)
    this.el = params.el;
    this.data = params.data;
    // Vue.data = this.data;
    this.playLayout(params)
    // this.parseAst()
  }
  // static data = {}
  playLayout(params){
    const root = document.querySelector(params.el);
   //  console.log(root)
    let text = root.innerText;
    let inHtml = root.innerHTML;
    console.log(inHtml);
    const wd = text.replace(/^({{)(.+)(}})$/g, '$2').replace(/({{)|(}})/g, '').split(/[\n\s]/g).filter(item=>item !=='');
   
    const data = params.data;
    for (const value of wd) {
      for(let item in data){
        if(item === value){
          const reg = new RegExp(`{{${item}}}`, 'g');
          if(reg.test(inHtml)){
            inHtml = inHtml.replace(reg, data[item]);
          }
        }
      }
    }

    root.innerHTML = inHtml;
  }
}

Vue.prototype.$mount = function(el){
  if(this.el === undefined){
    this.el = el
  }
}
// Object.defineProperty(Vue.data, 'x',{
//   enumerable: true,
//   configurable: true,
//   get(){
//       return this.data.x
//   },
//   set(v){
//       console.log(v);
    
//   }
// })
// Object.defineProperties
