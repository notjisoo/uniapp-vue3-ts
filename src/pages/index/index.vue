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
import type { XtxGuessInstance } from "@/types/component";
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

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>();

// 滚动触底会自动触发
const onScrolltolower = () => {
  guessRef.value?.getMore();
};
</script>

<template>
  <!-- 自动导入，在pages.json -->
  <CustomNavbar />

  <scroll-view scroll-y class="scroll-view" @scrolltolower="onScrolltolower">
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />

    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />

    <!-- 热门推荐 -->
    <HotPanel :list="HotPanelList" />

    <!-- 猜你喜欢的组件 -->
    <XtxGuess ref="guessRef" />
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
