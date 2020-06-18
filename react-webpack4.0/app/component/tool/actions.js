function add(payload) {
    return { type: 'ADD', payload }
  }
  //const bindAdd = payload => dispatch(add(payload));
  function min(payload){
      return{ type:'min',payload}
  }
  export {add,min}