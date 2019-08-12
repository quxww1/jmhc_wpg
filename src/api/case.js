import { get, post } from "../utils/request";

// 获取案例列表 参数  ?page_size=8&cate=1&page=1
export  function case_list(data) {
  return get({
    url: "cases",
    data: data
  });
}
// 获取案例展示  平面设计
export  function case_plane(data) {
  return get({
    url: "cases",
    data: data,
    api:1
  });
}
// 获取案例详情
export  function case_detail(id,data) {
  return get({
    url: `cases/${id}`,
    data: data
  });
}

// 获取案例类型
export  function case_cate(id,data) {
  return get({
    url: `cases-cate`,
    data: data,
    api:1
  });
}

// 获取多个案例展示
export  function multi_cases(data) {
  return get({
    url: `multi-cases`,
    data: data,
    api:1
  });
}

