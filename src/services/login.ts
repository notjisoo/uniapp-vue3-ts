import type { LoginResult } from "@/types/member";
import { http } from "@/utils/http";

// 小程序等于所需要的参数
type LoginParams = {
  code: string;
  encryptedData: string;
  iv: string;
};

/**
 *
 * @param data 请求参数
 * @returns
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: "POST",
    url: "/login/wxMin",
    data,
  });
};

// 小程序登录_内测版
// POST/login/wxMin/simple
/**
 *
 * @param phoneNumber  模拟手机号码
 * @returns
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber,
    },
  });
};
