"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_vk_data_goods_sku_popup2 + _easycom_uni_popup2)();
}
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_vk_data_goods_sku_popup + AddressPanel + ServicePanel + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const localdata = common_vendor.ref({});
    const popup = common_vendor.ref();
    const popupName = common_vendor.ref();
    const openPopup = (name) => {
      var _a;
      popupName.value = name;
      (_a = popup.value) == null ? void 0 : _a.open();
    };
    const goods = common_vendor.ref();
    const getGoodsData = async (id) => {
      const res = await services_goods.getGoodsAPI(id);
      goods.value = res.result;
      localdata.value = {
        _id: res.result.id,
        name: res.result.name,
        goods_thumb: res.result.mainPictures[0],
        spec_list: res.result.specs.map((v) => {
          return {
            name: v.name,
            list: v.values
          };
        }),
        sku_list: res.result.skus.map((v) => {
          return {
            _id: v.id,
            goods_id: res.result.id,
            goods_name: res.result.name,
            image: v.picture,
            price: v.price * 100,
            // 注意：这里需要 乘以 100价格才会正常
            stock: v.inventory,
            sku_name_arr: v.specs.map((vv) => vv.valueName)
          };
        })
      };
    };
    const currentSwiperVal = common_vendor.ref(0);
    const Onchange = (e) => {
      currentSwiperVal.value = e.detail.current;
    };
    const onTapImage = (url) => {
      common_vendor.index.previewImage({
        current: url,
        urls: goods.value.mainPictures
      });
    };
    common_vendor.onLoad(() => {
      getGoodsData(query.id);
    });
    const isShowSku = common_vendor.ref(false);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return common_vendor.e({
        a: common_vendor.o(($event) => isShowSku.value = $event),
        b: common_vendor.p({
          localdata: localdata.value,
          modelValue: isShowSku.value
        }),
        c: common_vendor.f((_a = goods.value) == null ? void 0 : _a.mainPictures, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => onTapImage(item), index),
            b: item,
            c: index
          };
        }),
        d: common_vendor.o(Onchange),
        e: common_vendor.t(currentSwiperVal.value + 1),
        f: common_vendor.t((_b = goods.value) == null ? void 0 : _b.mainPictures.length),
        g: common_vendor.t((_c = goods.value) == null ? void 0 : _c.price),
        h: common_vendor.t((_d = goods.value) == null ? void 0 : _d.name),
        i: common_vendor.t((_e = goods.value) == null ? void 0 : _e.desc),
        j: common_vendor.o(($event) => isShowSku.value = true),
        k: common_vendor.o(($event) => openPopup("address")),
        l: common_vendor.o(($event) => openPopup("service")),
        m: common_vendor.f((_f = goods.value) == null ? void 0 : _f.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        n: common_vendor.f((_g = goods.value) == null ? void 0 : _g.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        o: common_vendor.f((_h = goods.value) == null ? void 0 : _h.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        p: ((_i = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _i.bottom) + "px",
        q: popupName.value === "address"
      }, popupName.value === "address" ? {
        r: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        s: popupName.value === "service"
      }, popupName.value === "service" ? {
        t: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      } : {}, {
        v: common_vendor.sr(popup, "b064ec2c-1", {
          "k": "popup"
        }),
        w: common_vendor.p({
          type: "bottom",
          ["background-color"]: "\n  #fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
