import { get, post, put } from "../utils/request";

// 获取文章列表 参数  ?page_size=8&cate=1&page=1
export  function article_list(data) {
  return get({
    url: "articles",
    data: data
  });
}
// 获取文章详情
export  function article_detail(id,data) {
  return get({
    url: `articles/${id}`,
    data: data
  });
}
// 获取文章类型
export  function article_cate(data) {
  return get({
    url: `article-cate`,
    data: data,
    api:1
  });
}

// 文章点赞
export  function like(id,data) {
  return put({
    url: `articles/${id}/like`,
    data: data
  });
}

// 文章评论列表
export  function article_talk_list(data) {
  return get({
    url: "article-comments",
    data: data
  });
}

// 文章评论点赞
export  function talk_like(id,data) {
  return put({
    url: `article-comments/${id}/like`,
    data: data
  });
}


// 文章进行评论article-comments
export  function talk_comments(data) {
  return post({
    url: `article-comments`,
    data: data
  });
}