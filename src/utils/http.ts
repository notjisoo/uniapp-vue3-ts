/**
 * 拦截 uploadFile 文件上传
 *
 * TODO：
 *      1.非http开头需拼接地址
 *      2.请求超时
 *      3.添加小程序端请求头标识
 *      4.添加token请求头标识
 */

import { useMemberStore } from "@/stores";

export const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1.非 Http 开头需拼接地址
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }

    // 2.请求超时, 默认是六十秒
    options.timeout = 10000;

    // 3.添加小程序端请求头标识
    options.header = {
      ...options.header,
      "source-client": "miniapp",
    };

    // 添加请求token
    const memberStore = useMemberStore();
    const token = memberStore.profile?.token;
    if (token) {
      options.header.Authorization = token;
    }
  },
};

uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 *  1.返回 Promise 对象
 *  2.请求成功
 *     2.1 提取核心数据 res.data
 *     2.2 添加类型 支持范型
 *  3.请求失败
 *     3.1 网络错误 - 提示用户切换网络或者稍后重试
 *     3.2 401错误 - 清理用户信息，跳转到登录页
 *     3.3 其他错误 - 根据后端错误信息清提示
 */

interface Data<T> {
  code: string;
  msg: string;
  result: T;
}

// 这里用范型T去接收传过来的类型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回一个Promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 2.准确的来应该是响应成功，服务器会有4次响应，每次都会调用唯独200是成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>);
        } else if (res.statusCode === 401) {
          // 401错误 调用reject
          const memberStore = useMemberStore();
          memberStore.clearProfile();
          uni.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          // 通用错误 调用reject
          uni.showToast({
            icon: "none",
            title: (res.data as Data<T>).msg || "请求错误",
          });
          reject(res);
        }
      },
      fail(err) {
        // 网络错误，调用reject
        uni.showToast({
          icon: "none",
          title: "网络错误，换个网络试试",
        });
        reject(err);
      },
    });
  });
};
