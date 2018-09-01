import axios from "axios";
import qs from "qs";

// 创建axios实例
const service = axios.create({
  // baseURL: process.env === 'development' ? 'http://172.21.120.207:18161' : '', // api的base_url
  timeout: 5000 // 请求超时时间
});
service.interceptors.request.use(
  config => {
    // POST传参序列化
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    // 设置Content-Type
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;
