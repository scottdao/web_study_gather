const download = require('download-git-repo');
const path = require('path');
module.exports = function (target) {
  target = path.join(target || '.', '/');
  // console.log(target);
  // 利用git进行下载
  return new Promise((resolve, reject) => {
    download(
      'direct:https://github.com/scottdao/linux.git#master',
      target,
      { clone: true },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(target);
        }
      }
    );
  });
};
