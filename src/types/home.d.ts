import type { type } from "os";
import type { GoodsItem } from "./global";

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
export type GuessItem = GoodsItem;
