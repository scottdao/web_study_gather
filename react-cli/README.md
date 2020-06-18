- react-cli
- react 脚手架
- `npm config get prefix`
- [`download-git-repo`](https://www.npmjs.com/package/download-git-repo)

  ```
  download(

    'direct:https://github.com/scottdao/linux.git#master',
    target,
    { clone: true },
    (err) => {
      console.log(err);
      if (err) {
        reject(err);
      } else {
        resolve(target);
      }
    }
  );
  ```
