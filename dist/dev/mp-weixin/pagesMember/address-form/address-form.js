"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address-form",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const formRef = common_vendor.ref();
    const rules = {
      // 收货人
      receiver: {
        rules: [
          {
            required: true,
            errorMessage: "请输入姓名"
          },
          {
            minLength: 3,
            maxLength: 10,
            errorMessage: "请输入合适的长度"
          }
        ]
      },
      // 手机号码
      contact: {
        rules: [
          {
            required: true,
            errorMessage: "请输入联系方式"
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            errorMessage: "手机号格式不正确"
          }
        ]
      },
      // 所在地区
      fullLocation: {
        rules: [
          {
            required: true,
            errorMessage: "请选择所在地区"
          }
        ]
      },
      // 详细地址
      address: {
        rules: [
          {
            required: true,
            errorMessage: "请选择详细地址"
          }
        ]
      }
    };
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    common_vendor.index.setNavigationBarTitle({ title: query.id ? "修改地址" : "新建地址" });
    const onRegionChange = (e) => {
      form.value.fullLocation = e.detail.value.join(" ");
      const [provinceCode, cityCode, countyCode] = e.detail.code;
      Object.assign(form.value, { provinceCode, cityCode, countyCode });
    };
    const onSwitchChange = (e) => {
      form.value.isDefault = e.detail.value ? 1 : 0;
    };
    const onSubmit = async () => {
      var _a, _b;
      try {
        await ((_b = (_a = formRef.value) == null ? void 0 : _a.validate) == null ? void 0 : _b.call(_a));
        if (query.id)
          await services_address.putMemberAddressByIdAPI(query.id, form.value);
        else
          await services_address.postMemberAdressAPI(form.value);
        common_vendor.index.showToast({
          icon: "success",
          title: query.id ? "修改地址成功!" : "添加地址成功!"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 400);
      } catch (error) {
        common_vendor.index.showToast({ icon: "error", title: "请填写完整信息" });
      }
    };
    const getMemberAddressByIdData = async () => {
      if (query.id) {
        const res = await services_address.getMemberAddressByIdAPI(query.id);
        Object.assign(form.value, res.result);
      }
    };
    common_vendor.onLoad(() => {
      getMemberAddressByIdData();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: common_vendor.p({
          name: "receiver"
        }),
        d: form.value.contact,
        e: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        f: common_vendor.p({
          name: "contact"
        }),
        g: form.value.fullLocation
      }, form.value.fullLocation ? {
        h: common_vendor.t(form.value.fullLocation)
      } : {}, {
        i: common_vendor.o(onRegionChange),
        j: form.value.fullLocation.split(" "),
        k: common_vendor.p({
          name: "fullLocation"
        }),
        l: form.value.address,
        m: common_vendor.o(($event) => form.value.address = $event.detail.value),
        n: common_vendor.p({
          name: "address"
        }),
        o: common_vendor.o(onSwitchChange),
        p: form.value.isDefault === 1,
        q: common_vendor.sr(formRef, "24b6ccba-0", {
          "k": "formRef"
        }),
        r: common_vendor.p({
          rules,
          model: form.value
        }),
        s: common_vendor.o(onSubmit),
        t: common_vendor.t(form.value)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lijiahui/Desktop/uniapp-v3+Ts-shop/src/pagesMember/address-form/address-form.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=address-form.js.map
