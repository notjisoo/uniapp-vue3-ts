// 添加收货地址，请求参数
export interface AddressParams {
  // 收货人姓名
  receiver: string;
  // 联系方式
  contact: string;
  // 省份
  provinceCode: string;
  // 市区
  cityCode: string;
  // 详细地址
  address: string;
  //  默认地址
  isDefault: number;
}

// 收货地址
export interface AddressItem extends AddressParams {
  id: string;
  fullLocation: string;
}
