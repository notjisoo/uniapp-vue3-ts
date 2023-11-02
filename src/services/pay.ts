import type { OrderResult } from "@/types/order";
import { http } from "@/utils/http";

/**
 * 获取微信支付参数
 * @param data orderId 订单Id
 * @returns
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: "GET",
    url: "/pay/wxPay/miniPay",
    data,
  });
};

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 * @returns
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    method: "GET",
    url: "/pay/mock",
    data,
  });
};

/**
 * 模拟发货-内测版
 * @param id 订单id
 * @returns
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: "GET",
    url: `/member/order/consignment/${id}`,
  });
};

/**
 * 确认收货
 * @param id 订单id
 * @returns
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: "PUT",
    url: `/member/order/${id}/receipt`,
  });
};
