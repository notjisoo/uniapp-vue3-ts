// 购物车商品的类型
export type CartItem = {
  id: string;
  skuId: string;
  name: string;
  picture: string;
  count: number;
  price: number;
  nowPrice: number;
  stock: number;
  selected: boolean;
  attrsText: string;
  isEffective: boolean;
};
