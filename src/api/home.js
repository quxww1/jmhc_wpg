import { get, post } from "../utils/request";

export  function home(data) {
  return get({
    url: "home",
    data: data
  });
}