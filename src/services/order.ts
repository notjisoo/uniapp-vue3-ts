// 填写订单-获取预付订单
// GET/member/order/pre

import type { OrderCreateParams, OrderPreResult } from "@/types/order";
import { http } from "@/utils/http";

export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: "GET",
    url: "/member/order/pre",
  });
};

/**
 * 填写订单-获取立即购买订单
 * @param data 立即购买的参数
 * @returns
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string;
  count: string;
  addressId?: string;
}) => {
  return http<OrderPreResult>({
    method: "GET",
    url: "/member/order/pre/now",
    data,
  });
};

/**
 * 提交订单-获取提交订单的API
 * @param data 提交订单时，需要携带的参数
 * @returns
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: "POST",
    url: "/member/order",
    data,
  });
};
