// 填写订单-获取预付订单
// GET/member/order/pre

import type { OrderPreResult } from "@/types/order";
import { http } from "@/utils/http";

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: "GET",
    url: "/member/order/pre",
  });
};
