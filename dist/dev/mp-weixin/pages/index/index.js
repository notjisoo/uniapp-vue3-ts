"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const composables_index = require("../../composables/index.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_XtxSwiper2 + _easycom_XtxGuess2)();
}
const _easycom_XtxSwiper = () => "../../components/XtxSwiper.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  (CustomNavbar + PageSkeleton + _easycom_XtxSwiper + CategoryPanel + HotPanel + _easycom_XtxGuess)();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const CategoryPanel = () => "./components/CategoryPanel.js";
const HotPanel = () => "./components/HotPanel.js";
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const isLoading = common_vendor.ref(false);
    const bannerList = common_vendor.ref([]);
    const categoryList = common_vendor.ref([]);
    const HotPanelList = common_vendor.ref([]);
    const isTriggered = common_vendor.ref(false);
    const getHomeBanerData = async () => {
      const res = await services_home.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const getHomeCategoryData = async () => {
      const res = await services_home.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const getHoemHotData = async () => {
      const res = await services_home.getHomeHotAPI();
      HotPanelList.value = res.result;
    };
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await Promise.all([
        getHomeBanerData(),
        getHomeCategoryData(),
        getHoemHotData()
      ]);
      isLoading.value = false;
    });
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const onRefresherrefresh = async () => {
      var _a, _b;
      isTriggered.value = true;
      (_a = guessRef.value) == null ? void 0 : _a.resetData();
      await Promise.all([
        getHomeBanerData(),
        getHomeCategoryData(),
        getHoemHotData(),
        (_b = guessRef.value) == null ? void 0 : _b.getMore()
      ]);
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: HotPanelList.value
        }),
        e: common_vendor.sr(guessRef, "e17f8ba2-5", {
          "k": "guessRef"
        })
      }, {
        f: common_vendor.o(onRefresherrefresh),
        g: isTriggered.value,
        h: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lijiahui/Desktop/uniapp-v3+Ts-shop/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
