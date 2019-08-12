<template>
    <div v-if="!loading">
        <div class="top pf c-c-c">
          <img :src="list[0].author.avatar" alt="">
          <div class="name">{{list[0].author.nickname}}</div>
          <div class="post pf-light">{{list[0].author.job}}</div>
          <div class="total c-c-c pf-light">{{total}}篇文章</div>
        </div>
        <div class="list">
            <div class="item border-box c-fs-fs" v-for="(i,k) in list" @click="checkDetail(i,k)" :key = k>
              <img mode="widthFix" class="img" :src="i.cover_image" alt="">
              <div class="cate border-box c-c-c pf">{{i.cate.name}}</div>
              <div class="title pf">{{i.title}}</div>
              <div class="content pf-light">{{i.content}}</div>
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
</template>
<script>
import { like, article_list } from "../../api/article.js";
export default {
  data() {
    return {
      site: this.$site,
      tips: "下拉加载更多",
      loading: true,
      login: false,
      page: 1,
      // 文章列表
      list: [],
      total: 0,
      userID: 1
    };
  },
  onLoad(e) {
    this.userID = e.id || 1;
    if (!wx.getStorageSync("token")) {
      this.nologin();
      return;
    }
    this.getList();
  },
  onShow() {
    wx.hideTabBar();
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
    // 没有登录返回上一级
    nologin() {
      wx.setStorage({
        key: "noToken",
        data: 1
      });
      wx.switchTab({ url: "../news/main" });
    },
    // 获取数据
    getList() {
      article_list({
        user_id: this.userID,
        page: this.page
      }).then(res => {
        if (res.code == 200) {
          this.loading = false;
          this.total = res.data.total;
          this.list = this.list.concat(res.data.rows);
          if (res.data.rows.length < 10) {
            this.tips = "没有更多了";
          } else {
            this.tips = "下拉加载更多";
          }
        } else {
          this.nologin();
        }
      });
    },
    // 查看详情
    checkDetail(i, k) {
      let url = `../newsDetail/main?id=${i.id}`;
      wx.navigateTo({ url: url });
    }
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
  components: {}
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  img {
    width: 136rpx;
    height: 136rpx;
    border-radius: 50%;
    margin: 48rpx 0 27rpx 0;
  }
  .name {
    margin: 0 0 22rpx 0;
    font-size: 32rpx;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .post {
    font-size: 26rpx;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 0 0 40rpx 0;
  }
  .total {
    width: 154rpx;
    height: 56rpx;
    border: 1rpx solid rgba(155, 155, 155, 1);
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 0 0 49rpx 0;
  }
}
.nomore {
  font-size: 24rpx;
  font-weight: 400;
  margin: 60rpx auto 60rpx;
  text-align: center;
  color: rgba(155, 155, 155, 1);
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
    }
    .cate {
      position: absolute;
      top: 0;
      left: 0;
      width: fit-content;
      padding: 10rpx 25rpx;
      height: 42rpx;
      background: rgba(34, 80, 158, 1);
      font-size: 24rpx;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
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
</style>
