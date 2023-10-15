import type { PageParams } from "@/types/global";
import type { HotResult } from "@/types/hot";
import { http } from "@/utils/http";

// 利用&，交叉类型, 去给PageParams添加多一个参数为subType类型为string
type hotParams = PageParams & { subType?: string };
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 * @returns
 */
export const getHotRecommendAPI = (url: string, data?: hotParams) => {
  return http<HotResult>({
    method: "GET",
    url,
    data,
  });
};
