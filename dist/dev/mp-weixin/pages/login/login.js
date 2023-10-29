"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
require("../../stores/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      let res = await common_vendor.wx$1.login();
      code = res.code;
    });
    const onGetphonenumber = async (ev) => {
      const encryptedData = ev.detail.encryptedData;
      const iv = ev.detail.iv;
      await services_login.postLoginWxMinAPI({
        code,
        encryptedData,
        iv
      });
    };
    const onGetphonenumberSimple = async () => {
      const res = await services_login.postLoginWxMinSimpleAPI("13123456789");
      const memberStore = stores_modules_member.useMemberStore();
      memberStore.setProfile(res.result);
      common_vendor.index.navigateBack();
      common_vendor.index.showToast({
        icon: "success",
        title: "登录成功"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber),
        b: common_vendor.o(onGetphonenumberSimple)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=login.js.map
