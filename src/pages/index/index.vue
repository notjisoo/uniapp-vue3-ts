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
import PageSkeleton from "./components/PageSkeleton.vue";
import { useGuessList } from "@/composables";
// 请求数据是否在加载中
const isLoading = ref<boolean>(false);

// 存储数据bannerList, 如果你不给空数组指定类型那么就是never，以后只能是空数组
const bannerList = ref<BannerItem[]>([]);

// 存储首页分类的数据
const categoryList = ref<CategoryItem[]>([]);

// 热门推荐的数据
const HotPanelList = ref<HotPaneItem[]>([]);

// 设置下拉刷新的状态是否关闭显示
const isTriggered = ref<boolean>(false);

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
onLoad(async () => {
  isLoading.value = true;
  await Promise.all([
    getHomeBanerData(),
    getHomeCategoryData(),
    getHoemHotData(),
  ]);
  isLoading.value = false;
});

// 调用useGuessList
const { guessRef, onScrolltolower } = useGuessList();

// 下拉刷新触发函数
const onRefresherrefresh = async () => {
  isTriggered.value = true;
  // await getHomeBanerData();
  // await getHomeCategoryData();
  // await getHoemHotData();
  // 只需要等一次利用,Promise.all  三个同时开始
  guessRef.value?.resetData();
  await Promise.all([
    getHomeBanerData(),
    getHomeCategoryData(),
    getHoemHotData(),
    guessRef.value?.getMore(),
  ]);
  // 等待他们成功再关闭
  isTriggered.value = false;
};
</script>

<template>
  <!-- 自动导入，在pages.json -->
  <CustomNavbar />

  <scroll-view
    :refresher-enabled="true"
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />

    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />

      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />

      <!-- 热门推荐 -->
      <HotPanel :list="HotPanelList" />

      <!-- 猜你喜欢的组件 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
/* #ifdef APP-PLUS */
#app,
/* #endif */
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
