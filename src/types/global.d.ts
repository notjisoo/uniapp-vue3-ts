/**
 * 通用分页结果类型
 */
export type PageResult<T> = {
  // 列表数据
  items: T[] | null;
  // 总条数
  counts: number | string;
  // 当前页数
  page: number | string;
  // 总页数
  pages: number | string;
  // 每页条数
  pageSize: number | string;
};
