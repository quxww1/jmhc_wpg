<template>
    <div v-if="!loading">
        <img mode='widthFill' :src="detail.cover_image" class="top-img" alt=""> 
        <div class="info-box border-box">
          <div class="title pf">{{detail.title}}</div>
          <div class="date pf r-nw-fs-c">
            <div class="name">来自：{{detail.author.nickname}}</div>
            <div class="time">{{detail.create_time}}</div>
          </div>
           <div class="content border-box">
            <wxParse  :content="detail.content"></wxParse>
          </div>
        </div>
        <!-- 作者栏 -->
        <div class="author-box pf">
            <div class="blue-title r-nw-fs-c">
              <div class="blue"></div>
              <div class="title">作者</div>
            </div>
            <div class="info border-box r-nw-fs-c">
              <img class="photo" :src="detail.author.avatar" alt="">
              <div class="post c-c-fs">
                <div class="name">{{detail.author.nickname}}</div>
                <div class="job">{{detail.author.job}}</div>
              </div>
              <div class="more c-c-c" @click="checkMore">更多文章</div>
            </div>
        </div>
        <!-- 评论列表栏 -->
        <div class="comment-box pf">
            <div class="blue-title r-nw-fs-c">
              <div class="blue"></div>
              <div class="title">评论</div>
            </div>
            <div class="comments">
              <div class="item r-nw-fs-fs" v-for="(i,k) in list" :key = k>
                  <img class="left" :src="i.user.avatar" alt="">
                  <div class="right c-fs-fs">
                      <div class="top r-nw-sb-c">
                        <div class="name">{{i.user.nickname}}</div>
                        <div class="like-box r-nw-fs-c">
                          <img v-if="site && i.liked" class="liked" :src="site + '/img/news/liked.png'" alt="">
                          <img v-if="site && !i.liked" class="no-liked" @click="likeTalk(i,k)" :src="site + '/img/news/no-like.png'" alt="">
                          <div class="num pf-light">{{i.liked_num}}</div>
                        </div>
                      </div>
                      <div class="bottom">
                        {{i.content}}
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="nomore">{{tips}}</div>
        <!-- 底部发表评论 -->
        <div class="talk r-nw-fs-c border-box">
          <input class="pf-light" @confirm='submit' placeholder="写下你的评论吧..." maxlength="50" type="text" v-model="input">
          <div class="box r-nw-fs-c">
              <img v-if="site && detail.liked" class="liked" mode='widthFix'  :src="site + '/img/news/liked.png'" alt="">
              <img v-if="site && !detail.liked" @click="like" class="no-liked" mode='widthFix' :src="site + '/img/news/no-like.png'" alt="">
              <div class="num pf-light">{{detail.liked_num}}</div>
              <img v-if="site" class="comments"  mode='widthFix' :src="site + '/img/news/comment.png'" alt="">
              <div class="num pf-light">{{detail.comments_num}}</div>
              <!-- <img class="share" v-if="site" :src="site + '/img/news/share.png'" alt=""> -->
              <button open-type="share" class="share_btn" :data-a="detail.title">
                    <img class="share" mode='aspectFit' v-if="site" :src="site + '/img/news/share.png'" alt="">
              </button>
          </div>
        </div>
    </div>
</template>
<script>
import {
  article_detail,
  like,
  article_talk_list,
  talk_like,
  talk_comments
} from "../../api/article.js";
import wxParse from "mpvue-wxparse";
export default {
  data() {
    return {
      site: this.$site,
      tips: "下拉加载更多",
      loading: true,
      loadingNum: 0,
      login: false,
      page: 1,
      // 文章详情
      detail: {},
      // 评论列表
      list: [],
      articleID: 0,
      input: ""
    };
  },
  onLoad(e) {
    if (e.share_query) {
      wx.showLoading({
        title: "我是从分享页面进入的"
      });
    }
    this.articleID = e.id;
    if (!wx.getStorageSync("token")) {
      this.nologin();
      return;
    }
    this.getData();
  },
  methods: {
    // 文章点赞
    like() {
      like(this.detail.id).then(res => {
        if (res.code == 200) {
          wx.showToast({
            title: "点赞成功", //提示的内容,
            icon: "success", //图标,
            duration: 1000 //延迟时间,
          });
          this.detail.liked = 1;
          this.detail.liked_num = this.detail.liked_num + 1;
        } else {
          wx.showToast({
            title: "点赞失败 请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 1000 //延迟时间,
          });
        }
      });
    },
    // 评论点赞
    likeTalk(i, k) {
      talk_like(i.id).then(res => {
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
    // 没有登录返回上一级
    nologin() {
      wx.setStorage({
        key: "noToken",
        data: 1
      });
      wx.switchTab({ url: "../news/main" });
    },
    // 获取数据
    getData() {
      this.getDetail();
      this.getList();
    },
    // 获取详情
    getDetail() {
      article_detail(this.articleID).then(res => {
        if (res.code == 200) {
          let detail = res.data;
          let marked = require("marked");
          detail.content = marked(detail.content);
          this.detail = detail;
          this.checkLoading();
        } else if (res.code == 401) {
          this.nologin();
        } else {
          wx.showToast({
            title: "登录失败,请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 60000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
        }
      });
    },
    // 获取评论
    getList() {
      article_talk_list({
        article_id: this.articleID,
        page: this.page
      }).then(res => {
        if (res.code == 200) {
          this.list = this.list.concat(res.data.rows);
          if (res.data.rows.length < 10) {
            this.tips = "没有更多了";
          } else {
            this.tips = "下拉加载更多";
          }
          this.checkLoading();
        } else if (res.code == 401) {
          this.nologin();
        } else {
          wx.showToast({
            title: "登录失败,请稍后重试", //提示的内容,
            icon: "none", //图标,
            duration: 60000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透,
          });
        }
      });
    },
    // 查看作者页面
    checkMore() {
      let url = `../newsAuthor/main?id=${this.detail.user_id}`;
      // wx.navigateTo({ url: url });
      wx.redirectTo({ url: url });
    },
    // 检查两个请求时否都完成,都完成显示页面
    checkLoading() {
      this.loadingNum++;
      if (this.loadingNum == 2) {
        this.loading = false;
      }
    },
    // 提交评论
    submit(e) {
      talk_comments({
        article_id: this.detail.id,
        content: e.mp.detail.value
      }).then(res => {
        if (res.code == 200) {
          wx.showToast({
            title: "提交成功", //提示的内容,
            icon: "success", //图标,
            duration: 1000 //延迟时间,
          });
          this.page = 1;
          this.list.length = 0;
          this.input = "";
          this.getList();
        } else {
          this.nologin();
        }
      });
    }
  },
  onShow() {
    wx.hideTabBar();
  },

  onShareAppMessage(res) {
    return {
      title: res.target.dataset.a
    };
  },
  onReachBottom() {
    this.tips = "加载中...";
    this.page = this.page + 1;
    this.getList();
  },
  onUnload() {
    this.list.length = 0;
    this.page = 1;
    this.loading = true;
    this.loadingNum = 0;
  },
  components: {
    wxParse
  }
};
</script>
<style lang="scss" scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.top-img {
  width: 100%;
}
.info-box {
  background: white;
  padding: 53rpx 0 102rpx 0;
  margin: 0 0 20rpx 0;
  .title {
    width: 690rpx;
    font-size: 38rpx;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    line-height: 28rpx;
    margin: 0 0 41rpx 30rpx;
  }
  .date {
    font-size: 24rpx;
    font-weight: 200;
    color: rgba(0, 0, 0, 1);
    line-height: 35rpx;
    margin: 0 0 102rpx 0;
    .name {
      margin: 0 89rpx 0 30rpx;
    }
  }
  .content {
    width: 685rpx;
    margin: 0 auto;
  }
}
.author-box {
  width: 100%;
  height: 247rpx;
  background: rgba(255, 255, 255, 1);
  margin: 20rpx 0;
  .info {
    padding: 0 30rpx;
    .photo {
      width: 92rpx;
      height: 92rpx;
      border-radius: 50%;
      margin: 0 24rpx 0 0;
    }
    .post {
      .name {
        font-size: 30rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 46rpx;
      }
      .job {
        font-size: 26rpx;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 46rpx;
      }
    }
    .more {
      width: 152rpx;
      height: 56rpx;
      margin: 0 0 0 auto;
      border: 1rpx solid rgba(155, 155, 155, 1);
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}
.blue-title {
  width: 100%;
  height: 100rpx;
  padding: 0 0 0 30rpx;
  box-sizing: border-box;
  .blue {
    width: 7rpx;
    height: 28rpx;
    margin: 0 15rpx 0 0;
    background: rgba(34, 80, 158, 1);
  }
  .title {
    font-size: 28rpx;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 22rpx;
  }
}
.comment-box {
  width: 100%;
  margin: 20rpx 0;
  background: rgba(255, 255, 255, 1);
  .comments {
    .item {
      width: 683rpx;
      margin: 0 auto;
      padding: 40rpx 0;
      border-bottom: 1px solid rgba(220, 220, 220, 1);
      &:last-child {
        border-bottom: none;
      }
      .left {
        width: 85rpx;
        height: 85rpx;
        border-radius: 50%;
        margin: 0 21rpx 0 0;
        display: block;
      }
      .right {
        width: 565rpx;
        .top {
          width: 100%;
          .name {
            font-size: 28rpx;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 46rpx;
          }
          .like-box {
            margin: 0 0 0 auto;
            .liked,
            .no-liked {
              width: 28rpx;
              height: 25rpx;
              margin: 0 11rpx 0 0;
            }
            .num {
              font-size: 22rpx;
              font-weight: 200;
              color: rgba(0, 0, 0, 1);
              line-height: 35rpx;
            }
          }
        }
        .bottom {
          width: 100%;
          font-size: 26rpx;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 39rpx;
        }
      }
    }
  }
}
.nomore {
  font-size: 24rpx;
  font-weight: 400;
  margin: 60rpx auto 60rpx;
  text-align: center;
  color: rgba(155, 155, 155, 1);
}

.talk {
  width: 100%;
  height: 110rpx;
  background: white;
  padding: 0 30rpx;
  input {
    width: 315rpx;
    height: 68rpx;
    background: rgba(255, 255, 255, 1);
    border: 1rpx solid rgba(163, 163, 163, 1);
    border-radius: 10rpx;
    padding: 0 25rpx;
    font-size: 26rpx;
    font-weight: 200;
    color: rgba(85, 85, 85, 1);
  }
  .box {
    margin: 0 0 0 auto;
    .liked,
    .no-liked {
      width: 35rpx;
    }
    .comments {
      width: 35rpx;
    }
    .share {
      width: 35rpx;
      height: 34rpx;
    }
    .num {
      margin: 0 20rpx;
      font-size: 22rpx;
      font-weight: 200;
      color: rgba(0, 0, 0, 1);
      line-height: 35rpx;
    }
  }
}
.share_btn {
  background: none;
  border: none !important;
  height: 35rpx;
  padding: 0;
  margin: 0;
  line-height: 0;
  background-color: #fff;
  border-radius: 0;
  &::after {
    border: none;
  }
}
</style>
