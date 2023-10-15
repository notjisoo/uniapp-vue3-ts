<script setup lang="ts">
import { ref } from "vue";
import {
  getHomeBannerAPI,
  getHomeCategoryAPI,
  getHomeHotAPI,
} from "@/services/home";
import { onLoad } from "@dcloudio/uni-app";
import type { BannerItem, CategoryItem, HotPaneItem } from "@/types/home";
import CustomNavbar from "./components/CustomNavbar.vue";
import CategoryPanel from "./components/CategoryPanel.vue";
import HotPanel from "./components/HotPanel.vue";
// 存储数据bannerList, 如果你不给空数组指定类型那么就是never，以后只能是空数组
const bannerList = ref<BannerItem[]>([]);

// 存储首页分类的数据
const categoryList = ref<CategoryItem[]>([]);

// 热门推荐的数据
const HotPanelList = ref<HotPaneItem[]>([]);

// 获取首页轮播图数据
const getHomeBanerData = async () => {
  const res = await getHomeBannerAPI();
  bannerList.value = res.result;
};

// 获取首页分类的数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI();
  categoryList.value = res.result;
};

// 获取热门推荐数据
const getHoemHotData = async () => {
  const res = await getHomeHotAPI();
  HotPanelList.value = res.result;
};

// 页面加载的时候就需要调用获取信息
onLoad(() => {
  getHomeBanerData();
  getHomeCategoryData();
  getHoemHotData();
});
</script>

<template>
  <!-- 自动导入，在pages.json -->
  <CustomNavbar />

  <scroll-view scroll-y class="scroll-view">
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />

    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />

    <!-- 热门推荐 -->
    <HotPanel :list="HotPanelList" />

    <!-- 猜你喜欢的组件 -->
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
