import { get, post } from "../utils/request";

// 获取团队风采 参数 ?page_size=10&page=1
export  function team_show(data) {
  return get({
    url: "team-show",
    data: data
  });
}