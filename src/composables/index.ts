import type { XtxGuessInstance } from "@/types/component";
import { ref } from "vue";

/**
 *
 * @returns 猜你喜欢的组合式函数
 */
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>();

  // 滚动触底的事件
  const onScrolltolower = () => {
    guessRef.value?.getMore();
  };

  //   返回  ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  };
};
