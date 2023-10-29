"use strict";
const common_vendor = require("../../common/vendor.js");
const services_proflie = require("../../services/proflie.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "profile",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const profile = common_vendor.ref({});
    const getMemberProfileData = async () => {
      const res = await services_proflie.getMemberProfileAPI();
      profile.value = res.result;
      console.log(res);
    };
    const memberStore = stores_modules_member.useMemberStore();
    const onAvatarChange = () => {
      common_vendor.index.chooseMedia({
        count: 1,
        // 文件个数
        mediaType: ["image"],
        // 文件类型
        success: (res) => {
          const { tempFilePath } = res.tempFiles[0];
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            name: "file",
            filePath: tempFilePath,
            success: (res2) => {
              if (res2.statusCode === 200) {
                const avatar = JSON.parse(res2.data).result.avatar;
                profile.value.avatar = avatar;
                memberStore.profile.avatar = avatar;
                common_vendor.index.showToast({
                  icon: "success",
                  title: "上传头像成功"
                });
              } else {
                common_vendor.index.showToast({
                  title: "netWork find out problem, so Try again later pls",
                  icon: "success",
                  mask: true
                });
              }
            }
          });
        }
      });
    };
    const onSubmit = async () => {
      var _a, _b;
      const [provinceCode, cityCode, countyCode] = fullLocationCode;
      const res = await services_proflie.putMemberProflieAPI({
        nickname: (_a = profile.value) == null ? void 0 : _a.nickname,
        gender: profile.value.gender,
        birthday: profile.value.birthday,
        profession: (_b = profile.value) == null ? void 0 : _b.profession,
        provinceCode,
        cityCode,
        countyCode
      });
      memberStore.profile.nickname = res.result.nickname;
      common_vendor.index.showToast({
        icon: "success",
        title: "保存成功"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 400);
    };
    const onGenderChange = (e) => {
      profile.value.gender = e.detail.value;
    };
    const onBirthdayChange = (e) => {
      profile.value.birthday = e.detail.value;
    };
    let fullLocationCode = ["", "", ""];
    const onCityChange = (e) => {
      console.log(e.detail.value.join(" "));
      profile.value.fullLocation = e.detail.value.join(" ");
      fullLocationCode = e.detail.code;
    };
    common_vendor.onLoad(() => {
      getMemberProfileData();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = profile.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(onAvatarChange),
        d: common_vendor.t((_c = profile.value) == null ? void 0 : _c.account),
        e: profile.value.nickname,
        f: common_vendor.o(($event) => profile.value.nickname = $event.detail.value),
        g: ((_d = profile.value) == null ? void 0 : _d.gender) === "男",
        h: ((_e = profile.value) == null ? void 0 : _e.gender) === "女",
        i: common_vendor.o(onGenderChange),
        j: (_f = profile.value) == null ? void 0 : _f.birthday
      }, ((_g = profile.value) == null ? void 0 : _g.birthday) ? {
        k: common_vendor.t((_h = profile.value) == null ? void 0 : _h.birthday)
      } : {}, {
        l: common_vendor.o(onBirthdayChange),
        m: /* @__PURE__ */ new Date(),
        n: (_i = profile.value) == null ? void 0 : _i.birthday,
        o: (_j = profile.value) == null ? void 0 : _j.fullLocation
      }, ((_k = profile.value) == null ? void 0 : _k.fullLocation) ? {
        p: common_vendor.t(profile.value.fullLocation)
      } : {}, {
        q: common_vendor.o(onCityChange),
        r: (_l = profile.value.fullLocation) == null ? void 0 : _l.split(" "),
        s: profile.value.profession,
        t: common_vendor.o(($event) => profile.value.profession = $event.detail.value),
        v: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ljh/Desktop/uniapp-v3+Ts-shop/src/pagesMember/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=profile.js.map
