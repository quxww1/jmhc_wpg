function request(url, method, data, api = 0, header = {}) {
  wx.showLoading({
    title: "加载中" // 数据请求前loading
  });
  let host = "";
  let token = wx.getStorageSync("token") || "";
  //判断是否使用api结尾的接口地址而不是/wechat/结尾的接口地址
  if (api) {
    host = "https://jm-api.jumihc.com/api/";
    // host = "http://local-api.jumihc.com/api/";//本地接口
  } else {
    host = "https://jm-api.jumihc.com/api/wechat/";
    // host = "http://local-api.jumihc.com/api/wechat/"; //本地接口
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/x-www-form-urlencoded", // 默认值
        token: token
      },
      success: function(res) {
        wx.hideLoading();
        if (res.statusCode != 200) {
          wx.showToast({
            title: "服务器异常,请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 60000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          return;
        }
        //与后端约定状态码
        resolve(res.data);
      },
      fail: function(res) {
        wx.hideLoading();
        if (res.statusCode != 200) {
          wx.showToast({
            title: "服务器异常,请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 60000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          return;
        }
        reject(res.data);
      },
      complete: function(e) {
        wx.hideLoading();
        if (e.statusCode != 200) {
          wx.showToast({
            title: "服务器异常,请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 60000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
          return;
        }
      }
    });
  });
}

export function get(obj) {
  return request(obj.url, "GET", obj.data, obj.api);
}

export function post(obj) {
  return request(obj.url, "POST", obj.data, obj.api);
}

export function put(obj) {
  return request(obj.url, "put", obj.data);
}
