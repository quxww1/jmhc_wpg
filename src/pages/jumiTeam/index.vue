<template>
    <div v-if="!loading" class="wrap">
      <div class="none" v-if="team.length == 0">暂无数据</div>
      <div class="item pf border-box c-c-c" v-for="(i,k) in team" :key = k>
        <img mode='widthFix' :src="i.big_photo" alt="">
        <div class="name">{{i.name}}</div>
        <div class="post">{{i.position}}</div>
        <div class="intd">{{i.introduce}}</div>
      </div>
    </div>
</template>
<script>
import { team } from "../../api/team.js";
export default {
  data() {
    return {
      loading: true,
      team: []
    };
  },
  onLoad() {
    team().then(res => {
      this.loading = false;
      this.team = res.data;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  background-color: white;
  margin: 0rpx 0 50rpx 0;
  padding:1px 0 0 0;
  box-sizing: border-box;
  .item {
    padding: 0 0 60rpx 0;
    width: 690rpx;
    margin: 20rpx auto;
    background: #ececec;
    img {
      width: 100%;
      margin: 0 0 34rpx;
    }
    .name {
      font-size: 38rpx;
      font-weight: bold;
      color: rgba(8, 80, 164, 1);
    }
    .post {
      font-size: 30rpx;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin: 30rpx 0 40rpx;
    }
    .intd {
      width: 576rpx;
      font-size: 26rpx;
      font-weight: 500;
      color: rgba(85, 85, 85, 1);
      line-height: 41rpx;
    }
  }
}
.none {
  background-color: #F5F5F5;
}
</style>
