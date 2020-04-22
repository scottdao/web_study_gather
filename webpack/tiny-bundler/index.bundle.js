(function () {
  const moduleList = [
    // index.js
    function (require, module, exports) {
      const moduleA = require('./moduleA');
    },
    // moduleA
    function (require, module, exports) {
      module.exports = new Date().getTime();
    },
  ];
  const moduleDeepList = [{ './moduleA': 1 }, {}];
  function require(id, parentId) {}
  const module = { exports: {} };
  moduleList[0](null, module, module.exports);
})();
