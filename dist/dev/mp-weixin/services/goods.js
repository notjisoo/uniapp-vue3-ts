"use strict";
const utils_http = require("../utils/http.js");
const getGoodsAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: "/goods",
    data: {
      id
    }
  });
};
exports.getGoodsAPI = getGoodsAPI;
//# sourceMappingURL=goods.js.map
