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

/**
 * 收货地址详情
 * GET/member/address/${id}
 * @param id 地址id，路径参数拼接
 * @returns
 */
export const getMemberAddressByIdAPI = (id: string) => {
  console.log(id);
  return http<AddressItem>({
    method: "GET",
    url: `/member/address/${id}`,
  });
};

/**
 * 修改收货地址
 * PUT/member/address/${id}
 * @param id 地址的ID
 * @param data 表单的数据，请求体参数
 * @returns
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    method: "PUT",
    url: `/member/address/${id}`,
    data,
  });
};

/**
 * @param id 地址ID
 * @returns
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: "DELETE",
    url: `/member/address/${id}`,
  });
};
