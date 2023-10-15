// 分类列表 - 小程序
// GET/category/top

import type { CategoryTopItem } from "@/types/category";
import { http } from "@/utils/http";

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: "GET",
    url: "/category/top",
  });
};
