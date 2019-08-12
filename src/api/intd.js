// 企业介绍
import { get, post } from "../utils/request.js";

// 获取案例类型
export function introduce(data) {
  return get({
    url: "introduce",
    data: data,
  });
}
