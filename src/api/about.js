import { get, post } from "../utils/request.js";


// 获取案例类型
export  function about(data) {
    return get({
      url: "about",
      data: data,
      api:1
    });
  }