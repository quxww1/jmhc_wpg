import { get, post } from "../utils/request";

// 反馈留言
export function leave_message(data) {
  return post({
    url: "message",
    data: data,
    api:1
  });
}