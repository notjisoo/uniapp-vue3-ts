// 加入购物车
// POST/member/cart
import { http } from "@/utils/http";
import type { CartItem } from "@/types/cart.d.ts";
/**
 * 加入购物车
 * @param data 请求体参数
 * @returns
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: "POST",
    url: "/member/cart",
    data,
  });
};

/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: "GET",
    url: "/member/cart",
  });
};

/**
 * 删除/清空购物车单品
 * @param data 可以选择删除1个或者多个
 * @returns
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: "DELETE",
    url: "/member/cart",
    data,
  });
};

/**
 * 修改商品数量
 * @param skuId SKUID
 * @param data  是否选中状态；修改成多少数量
 * @returns
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number }
) => {
  return http({
    method: "PUT",
    url: `/member/cart/${skuId}`,
    data,
  });
};

/**
 * 商品的全选和取消全选
 * @param data 是否全选
 * @returns
 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: "PUT",
    url: `/member/cart/selected`,
    data,
  });
};
