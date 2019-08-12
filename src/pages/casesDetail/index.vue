<template>
    <div v-if="!loading">
        <img mode='aspectFill' class="top" :src="detail.cover_image" alt="">
        <div class="title-box">
          <div class="title pf">{{detail.title}}</div>
          <div class="space"></div>
          <div class="info pf">{{detail.profiles}}</div>
          <div class="qrcode  c-c-c pf" v-if="detail.qrcode">
            <img :src="detail.qrcode" alt="">
            <div>扫描二维码体验</div>
          </div>
        </div>
         <div class="title-box">
          <div class="title pf">页面展示</div>
          <div class="space"></div>
          <div class="page-box c-c-c">
              <!-- <img mode='widthFix' class="img" :src="detail.show_images[currentImg]" alt=""> -->
              <swiper class="swiper" @change='swiperChange' :current='currentImg'>
                <swiper-item class="item pf c-fs-c" v-for="(i,k) in detail.show_images" :key = k>
                    <img class="img" mode='widthFix' :src="i" alt="">
                </swiper-item>
              </swiper>
              <img v-if="site" @click="changeImg(-1)" class="btn left" :src="site +'/img/public/btn-right.png'" alt="">
              <img v-if="site" @click="changeImg(1)" class="btn right" :src="site +'/img/public/btn-right.png'" alt="">
              <div class="page">{{detail.show_images.length > 10 ? '':'0'}}{{currentImg + 1}}/{{detail.show_images.length > 9 ? '':'0'}}{{detail.show_images.length}}</div>
          </div>
        </div>
    </div>
</template>
<script>
import { case_detail } from "../../api/case.js";
export default {
  data() {
    return {
      site: this.$site,
      detail: {},
      loading: true,
      currentImg: 0
    };
  },
  onLoad(e) {
    case_detail(e.id).then(res => {
      this.currentImg = 0;
      this.detail = res.data;
      this.loading = false;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    // 改变当前图片
    changeImg(e) {
      let len = this.detail.show_images.length;
      if (e == 1) {
        if (this.currentImg == len - 1) {
          this.currentImg = 0;
          return;
        }
        this.currentImg += 1;
      }
      if (e == -1) {
        if (this.currentImg == 0) {
          this.currentImg = len - 1;
          return;
        }
        this.currentImg = this.currentImg - 1;
      }
    },
    swiperChange(e){
      this.currentImg = e.mp.detail.current;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  display: block;
}
.title-box {
  width: 100%;
  background: white;
  padding: 1rpx 0;
  position: relative;
}
.title {
  font-size: 32rpx;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 30rpx;
  margin: 58rpx 0 36rpx 30rpx;
}
.space {
  width: 690rpx;
  margin: 30rpx auto;
  height: 2rpx;
  background: rgba(205, 205, 205, 1);
}
.info {
  width: 686rpx;
  font-size: 26rpx;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  line-height: 45rpx;
  margin: 30rpx auto;
}
.qrcode {
  img {
    width: 242rpx;
    height: 242rpx;
    margin: 20rpx;
  }
  div {
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(136, 136, 136, 1);
    line-height: 71rpx;
  }
}
.page-box {
  width: 100%;
  .img {
    width: 476rpx;
    margin: 30rpx auto;
  }
  .btn {
    position: absolute;
    top: 40%;
    width: 64rpx;
    height: 64rpx;
  }
  .left {
    left: 29rpx;
    transform: rotateY(180deg);
  }
  .right {
    right: 29rpx;
  }
  .page {
    position: absolute;
    right: 29rpx;
    bottom: 11%;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(136, 136, 136, 0.7);
    line-height: 22rpx;
  }
  .swiper {
    width: 476rpx;
    height: 1000rpx;
    .img {
       width: 476rpx;
       margin: 30rpx auto;
    }
  }
}
</style>
