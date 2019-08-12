import { get, post } from "../utils/request.js";

export  function friends_list(data) {
    return get({
      url: "customers",
      data: data,
      api:1
    });
  }