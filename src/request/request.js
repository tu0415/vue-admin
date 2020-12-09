import axios from 'axios'


// 创建axios实例
const service = axios.create({
    baseURL: 'http://8.210.134.217:8201',  //测试环境
    headers:{
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        // "Content-Type": "application/json; charset=UTF-8"
        // "Content-Type": "multipart/form-data"
    },
    timeout: 15000 // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


const quest = (url, data,method) => {
    return new Promise((resolve, reject) => {
        service.request({
            method:method || 'get',
            url,
            data:data || '',
        }).then(res=>{
            if(res.code == 200) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(err=>{
           
        })   
   })
}

export default quest

// export default {
// 	post(url, data = {}, options = {}) {
// 		return service({
// 			method: 'post',
// 			url,
// 			data: data || {},
// 		}).then(getResponseData)
// 	},
// 	get(url, params = {}, options = {}) {
// 		return service({
// 			method: 'get',
// 			url,
// 			params: params || {},
// 		}).then(getResponseData)
// 	}
// }


