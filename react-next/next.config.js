const withSass = require('@zeit/next-sass');
const scss = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  }
  /* config options here */
});
module.exports = scss;
