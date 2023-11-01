"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_address = require("../../../services/address.js");
require("../../../utils/http.js");
require("../../../stores/index.js");
require("../../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "AddressPanel",
  emits: ["close"],
  setup(__props, { emit }) {
    const addressList = common_vendor.ref([]);
    const getMemberAddressData = async () => {
      const res = await services_address.getMemberAddressAPI();
      addressList.value = res.result;
      console.log(res.result);
    };
    getMemberAddressData();
    common_vendor.onShow(() => {
      getMemberAddressData();
    });
    const SelectAddress = (item) => {
      console.log(item);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => emit("close")),
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: common_vendor.t(item.fullLocation),
            d: common_vendor.n(item.isDefault ? "icon-checked" : ""),
            e: common_vendor.o(($event) => SelectAddress(item), item.id),
            f: item.id
          };
        })
      }, {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/pages/goods/components/AddressPanel.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=AddressPanel.js.map
