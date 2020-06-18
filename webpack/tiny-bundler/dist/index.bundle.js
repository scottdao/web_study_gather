(function () {
  var moduleA = function (require, module, exports) {
    console.log('my liudaoyun !');
module.exports = 'my liudaoyun !';

  };
  
  var module = { exports: {} };
  moduleA(null, module);
})();