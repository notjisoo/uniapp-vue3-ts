// 添加收货地址

import type { AddressItem, AddressParams } from "@/types/address";
import { http } from "@/utils/http";

/**
 * 添加收货地址
 * @returns
 */
export const postMemberAdressAPI = (data: AddressParams) => {
  return http({
    method: "POST",
    url: "/member/address",
    data,
  });
};

/**
 * 获取收地址列表
 * GET/member/address
 * @returns 获取收地址的列表接口
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: "GET",
    url: "/member/address",
  });
};
