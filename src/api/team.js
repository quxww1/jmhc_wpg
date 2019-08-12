
import { get, post } from "../utils/request";

export  function team(data) {
  return get({
    url: "team",
    data: data,
    api:1
  });
}