import axios,{AxiosRequestConfig} from 'axios'
axios.defaults.withCredentials = true
// create an axios instance
console.log(process.env.BASE_API)
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: process.env.BASE_API,
  timeout: 50000, // request timeout
})

// request interceptor
service.interceptors.request.use((config: AxiosRequestConfig) => {
  //全局loading

  return config
}, (error: any) => {
  // Do something with request error
  // for debug
  Promise.reject(error)
})  

// respone interceptor
service.interceptors.response.use(
  (response: any) => {
    // const res = response.data;
    // if (res.code !== 'SUCCESS' && res.code !== 'ok') {
    //   return Promise.reject('error');
    // } else {
    //   return response.data;
    // }
    return Promise.resolve(response.data);
  },
  (error: any) => {
    // loadingInstance.close();
    // // for debug

    return Promise.reject(error)
  })

//   type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
//   type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
//   export interface AxiosRequest {
//     baseURL?: string;
//     url: string;
//     data?: any;
//     params?: any;
//     method?: Method;
//     headers?: any;
//     timeout?: number;
//     responseType?: ResponseType;
// }


export default service
