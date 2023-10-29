"use strict";
const utils_http = require("../utils/http.js");
const getMemberProfileAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/profile"
  });
};
const putMemberProflieAPI = (data) => {
  return utils_http.http({
    method: "PUT",
    url: "/member/profile",
    data
  });
};
exports.getMemberProfileAPI = getMemberProfileAPI;
exports.putMemberProflieAPI = putMemberProflieAPI;
//# sourceMappingURL=proflie.js.map
