import type { type } from "os";

/**
 * 首页- 广告区域数据类型
 */
export type BannerItem = {
  // 跳转链接
  hrefUrl: string;
  // id
  id: string;
  // imgUrl
  imgUrl: string;
  // 跳转类型
  type: number;
};

/**
 * 首页- 分类
 */
export type CategoryItem = {
  icon: string;
  id: string;
  name: string;
};

/**
 * Home hotPanel
 */

export type HotPaneItem = {
  alt: string;
  id: string;
  pictures: string[];
  target: string;
  title: string;
  type: number;
};

// 猜你喜欢商品类型
export type GuessItem = {
  // 商品描述
  desc: string;
  // 商品折扣
  discount: number;
  // id
  id: string;
  // 商品名称
  name: string;
  // 商品已经下单数量
  orderNum: number;
  // 商品图片
  picture: string;
  // 商品价格
  price: number;
};
