// 获取个人信息
// GET/member/profile
// 请求参数

import type { ProfileDetail, ProfileParams } from "@/types/member";
import { http } from "@/utils/http";

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: "GET",
    url: "/member/profile",
  });
};

/**
 * 修改个人信息
 * @param data 请求体参数
 * @returns
 */
export const putMemberProflieAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: "PUT",
    url: "/member/profile",
    data,
  });
};
