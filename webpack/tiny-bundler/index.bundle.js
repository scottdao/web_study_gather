(function () {
  var moduleA = function (require, module, exports) {
    console.log('hello ldy');
    module.exports = 'hello ldy';
  };
  //var moduleList = [moduleA];
  var module = { exports: {} };
  moduleA(null, module);
})();
