"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  setup(__props) {
    const addressList = common_vendor.ref([]);
    const getMemberAddressData = async () => {
      const res = await services_address.getMemberAddressAPI();
      addressList.value = res.result;
    };
    const onDeleteAddress = (id) => {
      common_vendor.index.showModal({
        content: "删除地址",
        success: async (res) => {
          if (res.confirm) {
            await services_address.deleteMemberAddressByIdAPI(id);
            common_vendor.index.showToast({
              icon: "success",
              title: "删除地址成功"
            });
            getMemberAddressData();
          }
        }
      });
    };
    common_vendor.onShow(() => {
      getMemberAddressData();
    });
    const onChangeAddress = (item) => {
      const addressStore = stores_modules_address.useAddressStore();
      addressStore.changeSelectedAddress(item);
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: addressList.value.length
      }, addressList.value.length ? {
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: item.isDefault
          }, item.isDefault ? {} : {}, {
            d: common_vendor.t(item.fullLocation),
            e: common_vendor.t(item.address),
            f: `/pagesMember/address-form/address-form?id=${item.id}`,
            g: common_vendor.o(() => {
            }, item.id),
            h: common_vendor.o(($event) => onChangeAddress(item), item.id),
            i: common_vendor.o(($event) => onDeleteAddress(item.id), item.id),
            j: item.id,
            k: "0f7031a0-1-" + i0 + ",0f7031a0-0"
          });
        })
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/pagesMember/address/address.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=address.js.map
