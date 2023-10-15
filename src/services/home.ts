import type { PageResult } from "@/types/global";
import type {
  BannerItem,
  CategoryItem,
  GuessItem,
  HotPaneItem,
} from "@/types/home";
import { http } from "@/utils/http";

// 轮播图接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite,
    },
  });
};

/**
 *
 * @returns GET /home/category/mutli
 * 前台首页分类
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: "GET",
    url: "/home/category/mutli",
  });
};

/**
 *
 * @returns // 热门推荐接口 GET /home/hot/mutli
 */
export const getHomeHotAPI = () => {
  return http<HotPaneItem[]>({
    method: "GET",
    url: "/home/hot/mutli",
  });
};

/**
 * 猜你喜欢-小程序
 * GET
 * /home/goods/guessLike
 */

export const getHomeGoodsGuessLikeAPI = () => {
  return http<PageResult<GuessItem>>({
    method: "GET",
    url: "/home/goods/guessLike",
  });
};
