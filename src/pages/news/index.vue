<template>
    <div>
        <div class="login border-box c-c-c pf" v-if="!login">
          您还未登录 请先点击下方按钮进行登录
          <button
            class="button c-c-c"
            v-if="canIUse"
            open-type="getUserInfo"
            @getuserinfo="bindGetUserInfo"
          >
            授权登录
          </button>
          <view v-else>请升级微信版本</view>
        </div>
        <div class="wrap" v-if="login && !loading">
          <div class="tab">
            <swiper class="swiper r-nw-fs-c" :display-multiple-items='cate.length > 3 ? 4 : cate.length'>
              <swiper-item class="item border-box c-c-c" :class="currentTab == k ? 'active':''" v-for="(i,k) in cate" @click="checkTab(i,k)" :key = k>
                <div class="title-box">
                  <div class="title line-1 pf">{{i.name}}</div>
                  <div class="mask" v-if="currentTab == k"></div>
                </div>
              </swiper-item>
            </swiper>
          </div>
          <div class="banner"> 
            <swiper class="swiper" @change=changeCurrentDots>
              <swiper-item class="item border-box c-c-c" v-for="(i,k) in banner" :key = k>
                  <img class="img" mode='aspectFit' :src="i.image" alt="">
                  <div class="title pf">{{i.title}}</div>
                  <img mode='widthFix' class="bg" v-if='site' :src="site + '/img/news/banner-bg.png'" alt="">
              </swiper-item>
            </swiper>
            <div class="dots r-nw-c-c">
              <div class="item" :class="[currentDots == k ? 'active':'']" v-for="(i,k) in banner" :key = k></div>
            </div>
          </div>
          <div class="list">
            <div class="item border-box c-fs-fs" v-for="(i,k) in list" @click="checkDetail(i,k)" :key = k>
              <img mode="aspectFill" class="img" :src="i.cover_image" alt="">
              <div class="cate border-box r-nw-c-c pf">
                <div class="cate-name border-box r-nw-c-c">
                  {{i.cate.name}}
                </div>
              </div>
              <div class="title pf">{{i.title}}</div>
              <div class="content pf-light" v-html="i.content"></div>
              <div class="bottom r-nw-sb-c">
                <div class="author pf-light">
                  来自：{{i.author.nickname}}
                </div>
                <div class="share-like r-nw-c-c">
                  <img class="liked" mode='aspectFit' v-if="site && i.liked" :src="site + '/img/news/liked.png'" alt="">
                  <img class="no-like" @click.stop="like(i,k)" mode='aspectFit' v-if="site && !i.liked" :src="site + '/img/news/no-like.png'" alt="">
                  <div>{{i.liked_num}}</div>
                  <button open-type="share" class="share_btn" :data-a="i.title">
                    <img class="share" mode='aspectFit' v-if="site" :src="site + '/img/news/share.png'" alt="">
                  </button>
                </div>
              </div>
            </div>
            <div class="nomore">{{tips}}</div>
          </div>
        </div>
        <div class="pad"></div>
        <QuXiang num=3></QuXiang>
    </div>
</template>
<script>
import QuXiang from "../../components/qu-xiang.vue";
import { banner } from "../../api/banner.js";
import { login } from "../../api/login.js";
import { article_list, article_cate, like } from "../../api/article.js";
export default {
  data() {
    return {
      site: this.$site,
      currentTab: 0,
      currentDots: 0,
      tips: "下拉加载更多",
      loading: true,
      login: false,
      canIUse: wx.canIUse("button.open-type.getUserInfo"),
      cateID: 0,
      page: 1,
      cate: [
        {
          name: "推荐",
          id: 0
        }
      ],
      banner: [
        {
          image: this.$site +  "/img/news/banner.png",
          title: "[ 传播聚米经验，分享行业知识及优秀实践 ]",
          subTitle: ""
        },
        {
          image: this.$site +  "/img/news/banner.png",
          title: "[ 传播聚米经验，分享行业知识及优秀实践 ]",
          subTitle: ""
        },
        {
          image: this.$site +  "/img/news/banner.png",
          title: "[ 传播聚米经验，分享行业知识及优秀实践 ]",
          subTitle: ""
        },
        {
          image: this.$site +  "/img/news/banner.png",
          title: "[ 传播聚米经验，分享行业知识及优秀实践 ]",
          subTitle: ""
        }
      ],
      list: [],
      loadingnum: 0,
      listLoading: true
    };
  },
  onLoad(e) {
    let _this = this;
    // 检查是否可以直接调用getuserinfo获取头像昵称等信息
    if (wx.getStorageSync("token")) {
      _this.login = true;
      this.getData();
    } else {
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userInfo"]) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success(res) {
                wx.setStorageSync("userInfo", res.userInfo);
                _this.wxLogin();
                _this.login = true;
              }
            });
          } else {
            // 显示按钮
            _this.login = false;
          }
        }
      });
    }
  },
  onShow() {
    wx.hideTabBar();
    if (wx.getStorageSync("noToken")) {
      this.login = false;
      return;
    }
  },
  methods: {
    // 选择文章分类
    checkTab(i, k) {
      this.cateID = i.id;
      this.listLoading = true;
      this.currentTab = k;
      this.list = [];
      this.page = 1;
      this.tips = "下拉加载更多";
      this.getList();
    },
    // 微信授权按钮
    bindGetUserInfo(e) {
      wx.removeStorage({
        key: "noToken"
      });
      wx.setStorageSync("userInfo", e.mp.detail.userInfo);
      this.wxLogin();
      this.login = true;
    },
    // 微信登录获取code
    wxLogin() {
      let _this = this;
      wx.login({
        success: e => {
          wx.setStorageSync("code", e.code);
          login({
            code: e.code,
            nickname: wx.getStorageSync("userInfo").nickName,
            gender: wx.getStorageSync("userInfo").gender,
            avatarUrl: wx.getStorageSync("userInfo").avatarUrl
          }).then(res => {
            if (res.code == 200) {
              wx.setStorage({
                key: "token",
                data: res.data.token
              });
              _this.getData();
            } else {
              wx.showToast({
                title: "登录过期请重新登录", //提示的内容,
                icon: "none", //图标,
                duration: 1000, //延迟时间,
                success: res => {}
              });
              this.login = false;
            }
          });
        },
        fail: () => {},
        complete: () => {}
      });
    },
    // 获取文章列表
    getList() {
      let params = {
        page: this.page
      };
      if (this.cateID != 0) {
        params.cate = this.cateID;
      }
      article_list(params).then(res => {
        if (res.code != 200) {
          wx.showToast({
            title: "登录过期请重新登录", //提示的内容,
            icon: "none", //图标,
            duration: 1000 //延迟时间,
          });
          this.login = false;
          return;
        }
        this.list = this.list.concat(res.data.rows);
        if (res.data.rows.length < 10) {
          this.tips = "没有更多了";
        } else {
          this.tips = "下拉加载更多";
        }
        this.listLoading = false;
      });
    },
    // 获取顶部类型
    getCate() {
      article_cate().then(res => {
        if (res.code != 200) {
          wx.showToast({
            title: "登录过期请重新登录", //提示的内容,
            icon: "none", //图标,
            duration: 1000 //延迟时间,
          });
          this.login = false;
          return;
        }
        this.cate = this.cate.concat(res.data);
        this.checkIsLoading();
      });
    },
    // 获取顶部轮播图
    getBanner() {
      banner({ type: 2 }).then(res => {
        // this.banner = res.data;
        this.checkIsLoading();
      });
    },
    // 获取数据
    getData() {
      this.getBanner();
      this.getCate();
      this.getList();
    },
    checkIsLoading() {
      this.loadingnum = this.loadingnum + 1;
      if (this.loadingnum >= 2) {
        this.loading = false;
      }
    },
    // 点赞
    like(i, k) {
      like(i.id).then(res => {
        if (res.code == 200) {
          wx.showToast({
            title: "点赞成功", //提示的内容,
            icon: "success", //图标,
            duration: 1000 //延迟时间,
          });
          this.list[k].liked = 1;
          this.list[k].liked_num = this.list[k].liked_num + 1;
        } else {
          wx.showToast({
            title: "点赞失败 请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 1000 //延迟时间,
          });
        }
      });
    },
    // 查看详情
    checkDetail(i, k) {
      let url = `../newsDetail/main?id=${i.id}`;
      wx.navigateTo({ url: url });
    },
    // bannerswiper滑动事件
    changeCurrentDots(e){
      this.currentDots = e.mp.detail.current;
    }
  },
  onShareAppMessage(res) {
    return {
      title: res.target.dataset.a
    };
  },
  onReachBottom() {
    this.tips = "加载中..."
    this.page = this.page + 1;
    this.getList();
  },
  components: {
    QuXiang
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 100rpx 0;
  .button {
    margin: 43rpx auto 63rpx;
    width: 181rpx;
    height: 62rpx;
    background: rgba(34, 80, 158, 1);
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22rpx;
  }
}
.tab {
  width: 100%;
  height: 130rpx;
  position: fixed;
  z-index: 999;
  background-color: #f5f5f5;
  top: 0;
  .swiper {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    .item {
      overflow: visible!important;
      .title-box {
        position: relative;
        width: fit-content;
        .title {
          transition: 0.1s all linear;
          font-size: 26rpx;
          font-weight: 400;
          color: rgba(85, 85, 85, 1);
        }
        .mask {
          position: absolute;
          bottom: 0%;
          left: 16%;
          width: 100%;
          height: 11rpx;
          background: rgba(34, 80, 158, 1);
          box-shadow: 0px 3rpx 3rpx 0px rgba(34, 80, 158, 0.4);
          opacity: 0.5;
          border-radius: 16rpx;
        }
      }
    }
    .active {
      .title {
        font-size: 32rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
.banner {
  width: 686rpx;
  height: 382rpx;
  margin: 130rpx auto 34rpx;
  position: relative;
  .swiper {
    width: 100%;
    height: 100%;
    .item {
      width: 100%;
      height: 100%;
      .img {
        width: 95%;
        height: 85%;
        position: absolute;
        top: 5%;
      }
      .title {
        position: absolute;
        width: fit-content;
        top: 47%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .bg {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: -1;
      }
    }
  }
  .dots {
    position: absolute;
    width: 100%;
    height: 20rpx;
    z-index: 2;
    bottom: 20%;
    .item {
      margin: 0 5rpx;
      width: 8rpx;
      height: 8rpx;
      border: 1rpx solid rgba(255, 255, 255, 1);
      border-radius: 50%;
    }
    .active {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.list {
  width: 100%;
  margin: 40rpx 0 0;
  .item {
    width: 690rpx;
    background: rgba(255, 255, 255, 1);
    margin: 30rpx auto;
    padding: 1rpx 0;
    position: relative;
    img {
      width: 100%;
      height: 350rpx;
    }
    .cate {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10rpx 1rpx;
      height: 42rpx;
      box-sizing: border-box;
      background: rgba(34, 80, 158, 1);
      font-size: 24rpx;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      .cate-name {
        width: fit-content;
        margin: 0 25rpx;
      }
    }
    .title {
      margin: 32rpx 0 26rpx 33rpx;
      font-size: 30rpx;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
    .content {
      margin: 0 0 43rpx 33rpx;
      width: 90%;
      font-size: 24rpx;
      font-weight: 200;
      color: rgba(17, 17, 17, 1);
      line-height: 35rpx;
    }
    .bottom {
      width: 90%;
      margin: 0 33rpx 30rpx;
      font-size: 24rpx;
      font-weight: 200;
      color: rgba(0, 0, 0, 1);
      .share-like {
        .liked,
        .no-like,
        .share {
          height: 26rpx;
          width: 26rpx;
        }
        .liked,
        .no-like {
          margin: 0 11rpx 0;
        }
        .share {
          margin: 0 0 0 25rpx;
        }
        .share_btn {
          background: none;
          border: none !important;
          height: 30rpx;
          padding: 0;
          margin: 0;
          line-height: 0;
          background-color: #fff;
          border-radius: 0;
          &::after {
            border: none;
          }
        }
      }
    }
  }
}
.nomore {
  font-size: 24rpx;
  font-weight: 400;
  margin: 30rpx auto 30rpx;
  text-align: center;
  color: rgba(155, 155, 155, 1);
}
</style>
