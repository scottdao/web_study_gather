/**
 * 字典===映射/键值对
 *
 * ****/

// var Set = require("./callTogether");
// const set = new Set();
// console.log(set);

function Dictionary() {
  var items = {};
  this.has = function(value) {
    return value in items;
  };
  this.set = function(key, value) {
    items[key] = value;
  };
  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
    }
  };
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };
  this.values = function() {
    var values = [];
    for (var i in items) {
      if (this.has(i)) {
        values.push(items[i]);
      }
    }
    return values;
  };
  this.getItems = function() {
    return items;
  };
  this.clear = function() {
    items = {};
  };
  this.size = function() {
    return Object.keys(items).length;
  };
  this.keys = function() {
    return Object.keys(items);
  };
}
module.exports = Dictionary;
// var dictionary = new Dictionary();
// dictionary.set("l", "c"), dictionary.set("we", "78");
// console.log(dictionary.getItems());
