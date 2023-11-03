<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png" />
      <text class="logo-text">新鲜 亲民 快捷</text>
    </view>

    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<script setup lang="ts">
// 获取屏幕边界到安全区域的距离
const { safeAreaInsets } = uni.getSystemInfoSync();
</script>

<style lang="scss">
@import "./style/CustomNavbar.scss";
</style>
