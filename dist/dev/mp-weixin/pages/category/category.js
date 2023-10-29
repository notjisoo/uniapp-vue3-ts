"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const services_category = require("../../services/category.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  _easycom_XtxSwiper2();
}
const _easycom_XtxSwiper = () => "../../components/XtxSwiper.js";
if (!Math) {
  (_easycom_XtxSwiper + PageSkeleton)();
}
const PageSkeleton = () => "../index/components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "category",
  setup(__props) {
    const BannerList = common_vendor.ref([]);
    const isFinish = common_vendor.ref(false);
    const getBannerData = async () => {
      const res = await services_home.getHomeBannerAPI(2);
      BannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const activeIndex = common_vendor.ref(0);
    const getCategoryTopData = async () => {
      const res = await services_category.getCategoryTopAPI();
      categoryList.value = res.result;
    };
    const subCategoryList = common_vendor.computed(() => {
      var _a;
      return ((_a = categoryList.value[activeIndex.value]) == null ? void 0 : _a.children) || [];
    });
    common_vendor.onLoad(async () => {
      await Promise.all([getBannerData(), getCategoryTopData()]);
      isFinish.value = true;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isFinish.value
      }, isFinish.value ? {
        b: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: index === activeIndex.value ? 1 : "",
            d: common_vendor.o(($event) => activeIndex.value = index, item.id)
          };
        }),
        c: common_vendor.p({
          list: BannerList.value
        }),
        d: common_vendor.f(common_vendor.unref(subCategoryList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.goods, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods.id,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            c: item.id
          };
        })
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lijiahui/Desktop/uniapp-v3+Ts-shop/src/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=category.js.map
