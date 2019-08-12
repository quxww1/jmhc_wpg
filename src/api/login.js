import { get, post } from "../utils/request";

export  function login(data) {
  return post({
    url: "login",
    data: data
  });
}