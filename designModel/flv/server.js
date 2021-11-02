const tencentcloud = require("tencentcloud-sdk-nodejs");

// 导入对应产品模块的client models。
const CvmClient = tencentcloud.cvm.v20170312.Client;
// Xr8AwNaz9fy4VH5j9JWfZAa3HH0VordD

const clientConfig = {
  // 腾讯云认证信息
  credential: {
    secretId: "AKIDMze5uYD95ptpWcA3PVvNYWKrAC4kNRhj",
    secretKey: "Xr8AwNaz9fy4VH5j9JWfZAa3HH0VordD",
  },
  // 产品地域
  region: "ap-shanghai",
  // 可选配置实例
  profile: {
    signMethod: "HmacSHA256", // 签名方法
    httpProfile: {
      reqMethod: "POST", // 请求方法
      reqTimeout: 30, // 请求超时时间，默认60s
    },
  },
};
// 实例化要请求产品(以cvm为例)的client对象
const client = new CvmClient(clientConfig);
// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeZones().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("error", err);
  }
);
