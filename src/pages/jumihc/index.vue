<template>
    <div v-if="!loading">
        <BaseTop :title=top.title :bg=top.bg :subTitle=top.subTitle></BaseTop>
        <div class="wrap">
            <div class="top border-box pf c-c-c">
                <div class="title">{{info.introduce_title}}</div>
                <div class="space"></div>
                <div class="info">{{info.introduce_content}}</div>
            </div>
            <div class="skip r-nw-c-c">
                <div class="item c-c-c pf" @click="toskip(i)" v-for="(i,k) in skip" :key=k>
                    <img mode='aspectFit' :src="i.icon" alt="">
                    <div class="info">{{i.text}}</div>
                </div>    
            </div>
            <!-- 团队文化 -->
            <NumText :bg=title[0].bg :text='title[0].name'></NumText>
            <div class="clture r-w-sa-c">
                <div class="item" v-for="(i,k) in info.culture" :key = k>
                    <img :src="i.bg_image" alt="" v-if="k != 3">
                    <div class="div border-box c-c-fs" v-if="k != 3">
                        <div class="space"></div>
                        <div class="text pf">{{i.title}}</div>
                    </div>
                    <div class="black border-box pf c-fs-fs" v-if="k == 3">
                        <div class="title line-1">{{i.title}}</div>
                        <div class="content line-5">{{i.content}}</div>
                    </div>
                </div>
            </div>
             <!-- 动态数字 -->
            <div class='active-num c-c-c' id="active-num">
                <img v-if="site" :src="site +'/img/jumi/about-two-bg.png'" alt="">
                <div class="num-box pf r-nw-sa-c">
                    <div class="item c-c-c">
                        <div class="num  r-nw-fs-c">
                            <div>{{info.service_experience}}</div>       
                            <span class="span">年</span> 
                        </div>
                        <p class="text">服务经验</p>
                    </div>
                    <div class="item c-c-c">
                        <div class="num r-nw-fs-c">
                            <div>{{info.customer_num}}+</div>       
                        </div>
                        <p class="text">客户</p>
                    </div>
                    <div class="item c-c-c">
                        <div class="num r-nw-fs-c">
                            <div>{{info.staff_num}}</div>       
                        </div>
                        <p class="text">员工</p>
                    </div>
                </div>
            </div>
            <NumText :bg=title[1].bg :text='title[1].name'></NumText>
            <div class="our-team r-nw-fs-c">
                <div class="left border-box pf c-c-fs">
                    <div class="title">{{info.team_description.title}}</div>
                    <div class="space"></div>
                    <div class="content line-5">{{info.team_description.content}}</div>
                </div>
                <div class="right">
                    <img :src="info.team_description.image" alt="">
                </div>
            </div>
            <div class="our-team r-nw-fs-c">
                <div class="left border-box pf c-c-fs">
                    <div class="title">{{info.team_show.title}}</div>
                    <div class="space"></div>
                    <div class="content line-5">{{info.team_show.content}}</div>
                </div>
                <div class="right">
                    <img :src="info.team_show.image" alt="">
                </div>
            </div>
            <NumText :bg=title[2].bg :text='title[2].name'></NumText>
            <div class="friends">
              <swiper class="swiper r-nw-fs-c" @change="friendsChange">
                <swiper-item class="item border-box r-w-sb-c" v-for="(i,k) in friends" :key = k>
                    <div class="logo-box c-c-c" v-for="(i1,k1) of i" :key = k1>
                      <img mode='widthFix' :src="i1.logo" alt="">
                    </div>
                </swiper-item>
              </swiper>
              <div class="dots r-nw-c-c">
                <div class="item" v-for="(i,k) in friends" :key = k :style="{background:currentFriend != k ? 'rgba(224, 224, 224, .4)':'rgba(224, 224, 224,1)'}"></div>
              </div>
            </div>
            <NumText :bg=title[3].bg :text='title[3].name'></NumText>
            <div class="join-us">
                <div class="btn c-c-c pf">加入我们</div>
                <img :src="info.join_us_image" alt="">
            </div>
        </div>
        <div class="pad" :style="{background:'white'}"></div>
        <QuXiang num=2></QuXiang>
    </div>
</template>
<script>
import QuXiang from "../../components/qu-xiang.vue";
import NumText from "../../components/num-text";
import BaseTop from "../../components/base-top.vue";
import { about } from "../../api/about.js";
import { friends_list } from "../../api/friends.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "负重攀越 只为一个全新的高度",
        subTitle: "Heavy climbing is only for a new height",
        bg: this.$site + "/img/jumi/top-bg.png"
      },
      skip: [
        {
          text: "聚米介绍",
          icon: this.$site + "/img/jumi/skip-icon1.png",
          url: "../../pages/jumiDetail/main"
        },
        {
          text: "聚米团队",
          icon: this.$site + "/img/jumi/skip-icon2.png",
          url: "../../pages/jumiTeam/main"
        },
        {
          text: "聚米风采",
          icon: this.$site + "/img/jumi/skip-icon3.png",
          url: "../../pages/jumiElegant/main"
        }
      ],
      // 数字标题
      title: [
        {
          name: "聚米团队文化",
          bg: this.$site + "/img/jumi/01.png"
        },
        {
          name: "我们的团队",
          bg: this.$site + "/img/jumi/02.png"
        },
        {
          name: "我们的合作伙伴",
          bg: this.$site + "/img/jumi/03.png"
        },
        {
          name: "加入我们",
          bg: this.$site + "/img/jumi/04.png"
        }
      ],
      friends: [],
      info: {},
      currentFriend:0
    };
  },
  onLoad() {
    about().then(res => {
      this.loading = false;
      this.info = res.data;
    });
    friends_list({ type: 1 }).then(res => {
      this.friends = res.data;
    });
  },
  onShow() {
    wx.hideTabBar();
  },
  onShareAppMessage() {
    
  },
  methods: {
    toskip(i) {
      wx.navigateTo({ url: i.url });
    },
    // 合作伙伴滑动
    friendsChange(e){
      this.currentFriend = e.mp.detail.current;
    },
  },
  components: {
    QuXiang,
    BaseTop,
    NumText
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 690rpx;
  position: relative;
  top: -65rpx;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2rpx 24rpx 3rpx rgba(114, 114, 114, 0.17);
  border-radius: 25rpx;
  padding: 60rpx 0;
  .title {
    font-size: 28rpx;
    font-weight: bold;
    color: rgba(85, 85, 85, 1);
    line-height: 26rpx;
  }
  .space {
    width: 58rpx;
    height: 5rpx;
    background: rgba(136, 136, 136, 1);
    border: 1rpx solid rgba(136, 136, 136, 1);
    margin: 36rpx 0 52rpx 0;
    opacity: 0.5;
  }
  .info {
    width: 564rpx;
    font-size: 22rpx;
    font-weight: 400;
    text-align: center;
    color: rgba(85, 85, 85, 1);
    line-height: 45rpx;
  }
}
.wrap {
  padding: 1rpx 0;
  background: white;
}
.skip {
  width: 100%;
  .item {
    margin: 0 60rpx;
    img {
      max-width: 50rpx;
      height: 50rpx;
      margin: 0 0 25rpx;
    }
    .info {
      font-size: 24rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 10rpx;
    }
  }
}

.clture {
  width: 93%;
  margin: 0 auto;
  .item {
    width: 337rpx;
    height: 263rpx;
    position: relative;
    margin: 10rpx 0;
    img {
      width: 100%;
      height: 100%;
    }
    .div {
      position: absolute;
      bottom: 0rpx;
      left: 0rpx;
      width: 100%;
      height: 40%;
      padding: 0 0 10rpx 30rpx;
      .space {
        width: 34rpx;
        height: 2rpx;
        margin: 0 0 20rpx 0;
        background: rgba(255, 255, 255, 1);
      }
      .text {
        font-size: 24rpx;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 16rpx;
      }
    }
    .black {
      width: 100%;
      height: 100%;
      padding: 20rpx 30rpx;
      box-shadow: 0px 2rpx 16rpx 2rpx rgba(114, 114, 114, 0.1);
      .title {
        font-size: 22rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 22rpx;
        margin: 34rpx 0 32rpx 0;
      }
      .content {
        font-size: 16rpx;
        font-weight: 400;
        width: 100%;
        color: rgba(102, 102, 102, 1);
        line-height: 27rpx;
      }
    }
  }
}
//数字动态条
.active-num {
  margin: 100rpx 0;
  width: 100%;
  height: 138rpx;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .num-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .item {
      height: 100%;
      .num {
        font-weight: 400;
        font-size: 45rpx;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
        color: rgba(255, 255, 255, 1);
        .span {
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          font-size: 18rpx;
          font-weight: normal;
          color: rgba(255, 255, 255, 1);
        }
      }
      .text {
        margin: 15rpx 0 0 0;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        font-size: 18rpx;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        line-height: 20rpx;
      }
    }
  }
}
.our-team {
  width: 690rpx;
  height: 257rpx;
  margin: 30rpx auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2rpx 16rpx 2rpx rgba(114, 114, 114, 0.1);
  .left {
    width: 278rpx;
    height: 100%;
    padding: 0 0 0 30rpx;
    .title {
      font-size: 22rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 19px;
    }
    .space {
      width: 28rpx;
      height: 1rpx;
      margin: 17rpx 0 19rpx 0;
      background: rgba(51, 51, 51, 1);
    }
    .content {
      width: 208rpx;
      font-size: 16rpx;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 23rpx;
    }
  }
  .right {
    width: 412rpx;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.friends {
  width: 100%;
  .swiper {
    width: 100%;
    height: 900rpx;
    .item {
      width: 100%;
      padding: 0 45rpx;
      .logo-box {
        width: 45%;
        img {
          width: 80%;
        }
      }
    }
  }
  .dots {
    .item {
      width: 15rpx;
      height: 15rpx;
      border-radius: 50%;
      margin: 0 10rpx;
    }
  }
}
.join-us {
  width: 100%;
  height: 223rpx;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 147rpx;
    height: 41rpx;
    background: rgba(8, 80, 164, 1);
    border-radius: 20rpx;
    font-size: 20rpx;
    font-weight: 500;
    color: rgba(254, 254, 254, 1);
    line-height: 10rpx;
  }
}
</style>
