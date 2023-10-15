<script setup lang="ts">
import type { BannerItem } from "@/types/home";
import { ref } from "vue";

const activeIndex = ref(0);

// swiper change func
// UniHelper.SwiperOnChange 帮助uniapp提供事件类型
const onchange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail!.current; // !. 非空断言，排除非空(undefined)的情况
};

// 定义 props 接收, 定义范型，接收到的值必须是符合要求的
defineProps<{ list: BannerItem[] }>();
</script>

<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      @change="onchange"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>

    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list.length"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #a2a2a2;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
