/**
 * 接口地址：/goods
 * 请求方式：GET
 */

import type { GoodsResult } from "@/types/goods";
import { http } from "@/utils/http";

/**
 *
 * @param id 商品ID
 * @returns
 */
export const getGoodsAPI = (id: string) => {
  return http<GoodsResult>({
    method: "GET",
    url: "/goods",
    data: {
      id,
    },
  });
};
