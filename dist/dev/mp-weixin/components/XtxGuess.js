"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../utils/http.js");
require("../stores/index.js");
require("../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props, { expose }) {
    const GoodsGuess = common_vendor.ref([]);
    const finish = common_vendor.ref(false);
    const pageParams = {
      page: 1,
      pageSize: 10
    };
    const getHomeGoodsGuessLikeData = async () => {
      if (finish.value) {
        return common_vendor.index.showToast({ icon: "none", title: "没有更多数据啦" });
      }
      const res = await services_home.getHomeGoodsGuessLikeAPI(pageParams);
      GoodsGuess.value.push(...res.result.items);
      if (pageParams.page < res.result.pages)
        pageParams.page++;
      else {
        finish.value = true;
      }
    };
    const resetData = () => {
      pageParams.page = 1;
      GoodsGuess.value = [];
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getHomeGoodsGuessLikeData();
    });
    expose({
      resetData,
      getMore: getHomeGoodsGuessLikeData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(GoodsGuess.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.desc),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        b: common_vendor.t(finish.value ? "没有更多数据啦" : " 正在加载...")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/components/XtxGuess.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=XtxGuess.js.map
