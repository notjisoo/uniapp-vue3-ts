<script setup lang="ts">
import type { HotPaneItem } from "@/types/home";
defineProps<{ list: HotPaneItem[] }>();
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator
        hover-class="none"
        :url="`/pages/hot/hot?type=${item.type}`"
        class="cards"
      >
        <image
          v-for="pic in item.pictures"
          class="image"
          mode="aspectFit"
          :src="pic"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
@import "./style/HotPanel.scss";
</style>
