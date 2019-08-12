import { get, post } from "../utils/request";

export  function company(data) {
  return get({
    url: "company",
    data: data,
    api:1 //加上这个为了使用没有 /wechat/ 结尾的接口地址
  });
}