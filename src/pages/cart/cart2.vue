<template>
  <CartMain :safeAreaInsetsBottom="safeAreaInsets?.bottom" />
</template>

<script setup lang="ts">
import CartMain from "./components/CartMain.vue";
// 获取屏幕边界到安全区域的距离
const { safeAreaInsets } = uni.getSystemInfoSync();
</script>

<style lang="scss" scoped></style>
