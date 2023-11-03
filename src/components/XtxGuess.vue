<script setup lang="ts">
import { ref } from "vue";
import { getHomeGoodsGuessLikeAPI } from "@/services/home";
import { onMounted } from "vue";
import type { GuessItem } from "@/types/home";
import type { PageParams } from "@/types/global";

// 猜你喜欢的数据
const GoodsGuess = ref<GuessItem[]>([]);

// 已经结束的标记
const finish = ref(false);

// 分页参数 利用 required 这个ts工具函数 将你定义的时候是可选的转化为必选
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
};

// 获取猜你喜欢数据
const getHomeGoodsGuessLikeData = async () => {
  // 加上一个退出判断，判断依据就是finish是否为true
  if (finish.value) {
    return uni.showToast({ icon: "none", title: "没有更多数据啦" });
  }
  const res = await getHomeGoodsGuessLikeAPI(pageParams);

  GoodsGuess.value.push(...res.result.items);
  if (pageParams.page < (res.result.pages as number)) pageParams.page++;
  else {
    finish.value = true;
  }
};

// 重置数据
const resetData = () => {
  pageParams.page = 1;
  GoodsGuess.value = [];
  finish.value = false;
};

// 组件挂载完毕
onMounted(() => {
  getHomeGoodsGuessLikeData();
});

// 暴露方法
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
});
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in GoodsGuess"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">
        {{ item.desc }}
      </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"
    >{{ finish ? "没有更多数据啦" : " 正在加载..." }}
  </view>
</template>

<style lang="scss">
@import "./style/XtxGuess.scss";
</style>
