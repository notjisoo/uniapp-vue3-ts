// 填写订单-获取预付订单
// GET/member/order/pre

import type {
  OrderCreateParams,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from "@/types/order";
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

/**
 * 获取订单详情
 * @param id 订单id
 * @returns
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: "GET",
    url: `/member/order/${id}`,
  });
};

/**
 * 获取订单物流
 * @param id 订单id
 * @returns
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: "GET",
    url: `/member/order/${id}/logistics`,
  });
};

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单
 * @param data 订单集合
 * @returns
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    method: "DELETE",
    url: "/member/order",
    data,
  });
};

/**
 * 获取订单列表
 * @param data 订单状态
 * @returns
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: "GET",
    url: `/member/order`,
    data,
  });
};
