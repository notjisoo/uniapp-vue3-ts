"use strict";
const common_vendor = require("../../common/vendor.js");
var that;
const _sfc_main = {
  data() {
    return {
      // 是否打开SKU弹窗
      skuKey: false,
      // SKU弹窗模式
      skuMode: 1,
      // 后端返回的商品信息
      goodsInfo: {}
    };
  },
  // 监听 - 页面每次【加载时】执行(如：前进)
  onLoad(options) {
    that = this;
    that.init(options);
  },
  methods: {
    // 初始化
    init(options = {}) {
    },
    // 获取商品信息，并打开sku弹出
    openSkuPopup() {
      this.goodsInfo = {
        _id: "002",
        name: "迪奥香水",
        goods_thumb: "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
        sku_list: [
          {
            _id: "004",
            goods_id: "002",
            goods_name: "迪奥香水",
            image: "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
            price: 19800,
            sku_name_arr: ["50ml/瓶"],
            stock: 100
          },
          {
            _id: "005",
            goods_id: "002",
            goods_name: "迪奥香水",
            image: "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
            price: 9800,
            sku_name_arr: ["70ml/瓶"],
            stock: 100
          }
        ],
        spec_list: [
          {
            list: [
              {
                name: "20ml/瓶"
              },
              {
                name: "50ml/瓶"
              },
              {
                name: "70ml/瓶"
              }
            ],
            name: "规格"
          }
        ]
      };
      that.skuKey = true;
    },
    // sku组件 开始-----------------------------------------------------------
    onOpenSkuPopup() {
      console.log("监听 - 打开sku组件");
    },
    SkuPopup() {
      console.log("监听 - 关闭sku组件");
    },
    // 加入购物车前的判断
    addCartFn(obj) {
      let { selectShop } = obj;
      let res = {};
      let name = selectShop.goods_name;
      if (selectShop.sku_name != "默认") {
        name += "-" + selectShop.sku_name_arr;
      }
      res.msg = `${name} 已添加到购物车`;
      if (typeof obj.success == "function")
        obj.success(res);
    },
    // 加入购物车按钮
    addCart(selectShop) {
      console.log("监听 - 加入购物车");
      that.addCartFn({
        selectShop,
        success: function(res) {
          that.toast(res.msg);
          setTimeout(function() {
            that.skuKey = false;
          }, 300);
        }
      });
    },
    // 立即购买
    buyNow(selectShop) {
      console.log("监听 - 立即购买");
      that.addCartFn({
        selectShop,
        success: function(res) {
          that.toast("立即购买");
        }
      });
    },
    toast(msg) {
      common_vendor.index.showToast({
        title: msg,
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  _easycom_vk_data_goods_sku_popup2();
}
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
if (!Math) {
  _easycom_vk_data_goods_sku_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.openSkuPopup()),
    b: common_vendor.sr("skuPopup", "fb6ea9e5-0"),
    c: common_vendor.o($options.onOpenSkuPopup),
    d: common_vendor.o($options.SkuPopup),
    e: common_vendor.o($options.addCart),
    f: common_vendor.o($options.buyNow),
    g: common_vendor.o(($event) => $data.skuKey = $event),
    h: common_vendor.p({
      ["border-radius"]: "20",
      localdata: $data.goodsInfo,
      mode: $data.skuMode,
      modelValue: $data.skuKey
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb6ea9e5"], ["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=cart.js.map
