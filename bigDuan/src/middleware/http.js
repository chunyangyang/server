import axios from 'axios';
import qs from './query-string.js';
import Alert from 'zzc-design-mobile/lib/alert';
class Http {
    constructor() {
        const _this = this;
        this.http = axios.create({
            // baseURL: '',
            timeout: 50000,
            responseType: "json",
            withCredentials: false, // 是否允许带cookie这些
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        });

        this.CancelToken = axios.CancelToken;
        this.cancel = null;
        this.dataMethodDefault = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function(data) {
                return qs.stringify(data);
            }],
            cancelToken: new this.CancelToken(function executor(c) {
                _this.cancel = c;
            })
        };

        // 发送前拦截处理
        this.http.interceptors.request.use(
            config => {

                // 在发送请求之前处理
                if (config.method !== "post") {
                    // 序列化
                    config.data = qs.stringify(config.data);
                }             
                return config;
            },
            error => {
                let {data} = error;
                return Promise.reject(data.message);
            }
        );
         // 响应后拦截处理
        this.http.interceptors.response.use(
            res => {
                let { data } = res;
                let result = typeof data == "string" ? data.json() : data;
                return result;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    getAsync(url, data) {
        return new Promise(async (resolve, reject) => {
            await this.http.get(url, { params: data })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    // Toast.info(err.message, 2);
                    reject(err);
                    Alert({
                        title: '温馨提示',
                        content: err.message||err.msg,
                        buttons: [
                            {
                                text: '确定',
                                onPress: () => { },
                                props: {
                                    style: { color: '#254FCB' }
                                }
                            }
                        ]
                    });
                });
        });
    }

    // get(url, data) {
    //     return this.http.get(url, { params: data });
    // }

    postAsync(url, data, option) {
        return new Promise(async (resolve, reject) => {
            await this.http.post(url, data, {
                    ...this.dataMethodDefault,
                    ...option
                })
                .then((result) => {                   
                    resolve(result);
                })
                .catch((err) => {
                    // Toast.info(err.message, 2);
                    reject(err);
                    Alert({
                        title: '温馨提示',
                        content: err.message||err.msg,
                        buttons: [
                            {
                                text: '确定',
                                onPress: () => { },
                                props: {
                                    style: { color: '#254FCB' }
                                }
                            }
                        ]
                    });
                });
        });
    }

    post(url, data, option) {
        return this.http.post(url, data, {
            ...this.dataMethodDefault,
            ...option
        });
    }
}

export default Http;