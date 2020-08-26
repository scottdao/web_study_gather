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
    const root = document.querySelector(params.el);
   //  console.log(root)
    let text = root.innerText;
    let inHtml = root.innerHTML;
    // console.log(root.prototype)
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
// Object.defineProperties
