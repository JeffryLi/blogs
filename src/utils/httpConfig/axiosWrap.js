import axios from 'axios';

export default()=>{
   //let loadingInstance; //创建Loading 的实例
   axios.defaults.baseURL = 'http://localhost/'; // 配置axios请求的地址

   //配置发送请求前的拦截器 可以设置token信息 
   axios.interceptors.request.use(config => {
           return config;
       }, error => {
           loadingInstance.close();
           return Promise.reject(error);
       });

    /* // 配置响应拦截器 
    axios.interceptors.response.use(res => {
        loadingInstance.close();
        //这里面写所需要的代码
        if(res.data.code =='401'){
            //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
            return false;
        };
        return Promise.resolve(res);
    }, error => {
        loadingInstance.close();
        return Promise.reject(error);
    }); */

    return axios;
}