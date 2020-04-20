// async function async1() {
//   console.log('async1 start'); //2
//   await async2();
//   console.log('async1 end'); // 6
// }

// async function async2() {
//   console.log('async2'); //3
// }

// console.log('script start'); // 1

// setTimeout(function() {
//   console.log('setTimeout'); // 8
// }, 0);

// async1();

// new Promise(function(resolve) {
//   console.log('promise1'); //4
//   resolve();
// }).then(function() {
//   console.log('promise2'); // 7
// });

// console.log('script end'); // 5

// new Promise(function(resolve, reject) {
//   console.log('111');
//   resolve();
// }).then(() => {
//   console.log('222');
// });
const asap = require('./statics/asap/raw');
const playAsap = function (fn) {};
// console.log(asap);
function PlayPromise(fn) {
  // this.playFn = fn;

  this.state = 0; // pending
  this.value = null;
  this.callBacks = [];
  var resolve = function (value) {
    this.value = value;
    // this.callBacks(value);
    this.state = 1; // fulfilled
    // fn(value);
    // console
    asap(() => {
      this.callBacks.forEach((fn) => {
        // console.log(fn);
        fn(value);
      });
    });
  };
  fn(resolve.bind(this));
}
PlayPromise.prototype.then = function (fulfilled) {
  if (this.state === 1) {
    this.callBacks.push(fulfilled);
  }
  //   else {
  //    fulfilled(this.value);
  //   }

  // this.callBacks.push(fulfilled);
};
// console.log(111);
new PlayPromise((resolve) => {
  console.log(333);
  resolve();
}).then(() => {
  console.log(444);
});
console.log(222);

// function My(fn) {
//   doMy(fn, this);
// }
// My.prototype.then = function() {};

// function doMy(fn, promise) {
//   console.log(promise);
//   console.log(promise.prototype);
// }
// new My(() => {});

// new Promise((resolve, reject) => {
//   //   resolve(123);
//   reject(0);
//   console.log(333);
// })
//   .then(value => {
//     console.log(value, '22');
//   })
//   .catch(err => {
//     console.log(err);
//   });
// console.log(4444);
// new Promise((resolve) => {
//   console.log(1111);
//   resolve();
// }).then(() => {});
