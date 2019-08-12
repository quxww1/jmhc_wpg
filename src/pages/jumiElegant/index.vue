<template>
    <div v-if="!loading">
        <BaseTop :title=top.title :bg=top.bg :subTitle=top.subTitle></BaseTop>
        <div class="item border-box pf" v-for="(i,k) in list" :key = k>
            <div class="date">{{i.date}}</div>
            <div class="title">{{i.title}}</div>
            <img mode='widthFix' v-if='i.photos.length == 1' :src="i.photos[0]" alt="">
            <div class="img-box r-w-fs-c" v-if="i.photos.length > 1">
                <img mode='widthFix' :src="i1" v-for="(i1,k1) in i.photos" :key = k1>
            </div>
            <div class="border"></div>
            <div class="point"></div>
        </div>
        <div class="tips">{{tips}}</div>
    </div>
</template>
<script>
import BaseTop from "../../components/base-top.vue";
import { team_show } from "../../api/team-show.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "加入聚米 一起玩！",
        subTitle: "Join JuMi and play together!",
        bg: this.$site + "/img/jumi/elegant-top-bg.png"
      },
      list: [],
      page: 1,
      tips: "下拉加载更多"
    };
  },
  onLoad() {
    this.getList();
  },
  onShow() {
    wx.hideTabBar();
  },
  onShareAppMessage() {
    
  },
  methods: {
    getList() {
      team_show({ page: this.page }).then(res => {
        this.list = this.list.concat(res.data.rows);
        if (res.data.rows.length < 8) {
          this.tips = "没有更多了";
        } else {
          this.tips = "下拉加载更多";
        }
        this.loading = false;
      });
    }
  },
  onReachBottom() {
    this.tips = "加载中...";
    this.page = this.page + 1;
    this.getList();
  },
  components: {
    BaseTop
  }
};
</script>
<style lang="scss" scoped>
.item {
  width: 100%;
  background: white;
  position: relative;
  padding: 40rpx 0 60rpx 100rpx;
  .date {
    font-size: 22rpx;
    font-weight: 300;
    color: rgba(136, 136, 136, 1);
  }
  .title {
    font-size: 28rpx;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 27rpx 0 29rpx;
  }
  img {
    width: 618rpx;
  }
  .border {
    position: absolute;
    left: 60rpx;
    top: 0;
    height: 100%;
    width: 2rpx;
    background: rgba(223, 223, 223, 1);
  }
  .point {
    width: 22rpx;
    height: 22rpx;
    background: rgba(223, 223, 223, 1);
    border: 1rpx solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    position: absolute;
    top: 41rpx;
    left: 48rpx;
  }
  .img-box {
    width: 618rpx;
    img {
      width: 30%;
      margin: 0 10rpx 10rpx 0;
    }
  }
}
.tips {
  font-size: 24rpx;
  font-weight: 400;
  margin: 30rpx auto 50rpx;
  text-align: center;
  color: rgba(155, 155, 155, 1);
}
</style>
