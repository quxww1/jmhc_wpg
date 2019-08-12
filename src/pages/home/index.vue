<template>
    <div v-if="!loading">
        <swiper class="top-swiper"  circular indicator-dots indicator-color='white' indicator-active-color='#22509E'>
          <swiper-item class="item c-fs-c" v-for="(i,k) in topImage" :key = k>
              <img class="bg" :src="i.image" alt="">
              <div class="title pf">{{i.title}}</div>
              <div class="info pf">{{i.sub_title}}</div>
          </swiper-item>
        </swiper>
        <HomeTitle cn='主营业务' en='MAIN BUSINESS'></HomeTitle>
        <div class="business r-w-fs-c">
          <div class="item c-c-c" @click="skip(i,k)" v-for="(i,k) in business" :key = k>
              <img mode='aspectFit' :src="i.icon" alt="">
              <div class="text">{{i.text}}</div>
          </div>
        </div>
        <HomeTitle cn='解决方案' en='INDUSTRY SOLUTIONS'></HomeTitle>
        <div class="solution pf c-fs-c">
          <div class="item c-c-c" @click="skip(i,k)" v-for="(i,k) in solution" :key = k>
            <img :src="i.img" alt="" class="bg">
            <div class="title">{{i.title}}</div>
            <div class="info1 pf-light">{{i.info1}}</div>
            <div class="info2 pf-light">{{i.info2}}</div>
          </div>
        </div>
        <HomeTitle cn='合作案例' en='COOPERATION CASE'></HomeTitle>
        <div class="case c-c-c">
          <img class="left" @click="nextPrev(-1)" v-if="site" :src="site+'/img/public/left-gray.png'" alt="">
          <img class="right" @click="nextPrev(1)" v-if="site" :src="site+'/img/public/left-gray.png'" alt="">
          <swiper class="swiper" :current=currentTab>
            <swiper-item class="item pf c-fs-c" v-for="(i,k) in home.cases" :key = k>
                <img class="img" mode='aspectFit' :src="i.cover_image" alt="">
                <div class="title">{{i.title}}</div>                
                <div class="info">{{i.short_profiles}}</div>                
            </swiper-item>
          </swiper>
          <div class="check pf r-nw-sa-c">
            <div class="check-detail c-c-c" @click="checkDetail">
              了解详情
            </div>
            <div class="check-qrcode c-c-c" @click="checkQrcode" v-if="home.cases[currentTab].qrcode">
              扫码体验
              <div class="box pf c-c-c" v-if="qrcodeIsShow">
                <img v-if="site" :src="site+'/img/home/qr-code-bg.png'" alt="" class="bg">
                <img @click="previewImage(home.cases[currentTab].qrcode)" class="qrcode" :src='home.cases[currentTab].qrcode' alt="">
                <div>扫码上方二维码</div>
              </div>
            </div>
          </div>
          <!-- <img @click="previewImage('')" src="/img/public/code.png" alt=""> -->
        </div>
        <div class="faq">
          <HomeTitle background='transparent' cn='全方位的服务保障' en='ALL-ROUND SERVICE GUARANTEE' cnColor='#FFFFFF' spaceColor='#FFFFFF'  enColor='#FFFFFF'></HomeTitle>
          <img v-if="site" :src="site +'/img/home/faq-bg.png'"  alt="" class="bg">
          <div class="swiper-box">
            <div class="line"  :style="{left:currentFaqTab == 0 ? '80rpx':'0'}"></div>
            <swiper class="swiper" circular display-multiple-items=4 @change=change :current=currentFaqTab>
              <swiper-item class="item pf c-sa-c" v-for="(i,k) in guaranteeList" :key = k>
                <div class="point" v-if="currentFaqTab != k"></div>
                <img class="active-point" v-if="currentFaqTab == k && site" :src="site+ '/img/home/active-point.png'"  alt="">
                <div class="title pf" :class="[currentFaqTab == k? 'active':'']">{{i.title}}</div>
              </swiper-item>
            </swiper>
          </div>
          <div class="qa pf c-c-fs">
            <img class="qa-bg" v-if="site" :src="site+'/img/home/faq-qa-bg.png'" alt="">
            <div class="q r-nw-fs-c">
                <div>
                  Q: 
                </div>
                <div class="line-1">
                  {{home.flow_faq[currentFaqTab + 1] ? home.flow_faq[currentFaqTab + 1].question:'暂时没有该问答'}}
                </div>
            </div>
            <div class="a r-nw-fs-fs">
                <div>
                  A:                         
                </div>
                <div class="line-2">
                  {{home.flow_faq[currentFaqTab + 1] ? home.flow_faq[currentFaqTab + 1].answer:'暂时没有该问答'}}
                </div>
            </div>
          </div>
        </div>
        <div class="team">
          <HomeTitle cn='团队风采' en='TEAM DEMEANOR'></HomeTitle>
          <div class="list r-w-sa-fs">
            <div class="item c-c-c" v-for="(i,k) in home.team" :key = k>
              <img class="img" mode='aspectFill' :src="i.photo" alt="">
              <div class="name">{{i.name}}</div>
              <div class="post">{{i.position}}</div>
            </div>
          </div>
        </div>
        <div class="advantage">
          <HomeTitle cn='企业优势' en='ENTERPRISE ADVANTAGE'></HomeTitle>
          <div class="list r-w-c-c">
            <div class="item pf c-c-c" v-for="(i,k) in home.advantage" :key = k>
              <div class="r-nw-c-c title-box">
                <img mode="aspectFit" :src="i.active_icon" alt="">
                <div class="text">{{i.title}}</div>
              </div>
              <div class="info line-5 c-c-c">
                {{i.content}}
              </div>
            </div>
          </div>
        </div>
        <div class="jumi">
          <HomeTitle cn='聚米学院' en='JUMI COLLEGE'></HomeTitle>
          <div class="list">
            <div class="one" @click="checkNewsDetail(i,k)"  v-if="k == 0" v-for="(i,k) in home.article" :key = k>
              <img class="bg" :src="i.cover_image" alt="">
              <div class="title line-1 c-c-c">{{i.title}}</div>
            </div>
            <div class="item border-box r-nw-fs-c" @click="checkNewsDetail(i,k)" v-if="k != 0" v-for="(i,k) in home.article" :key = k>
              <div class="left c-sb-fs">
                <div class="day">{{i.day}}</div>
                <div class="space"></div>
                <div class="year">{{i.month}}</div>
              </div>
              <div class="middle"></div>
              <div class="right c-sb-fs">
                <div class="top pf line-2">
                  {{i.title}}
                </div>
                <div class="bottom pf r-nw-sb-c">
                  <div>来自：{{i.author ? i.author : "小聚米"}}</div>
                  <img v-if="site" :src="site+'/img/public/arrow-right.png'" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="more c-c-c" @click="checkMore">查看更多</div>
        </div>
        <div class="friends">
          <div class="title c-c-c">
            <div>超过 <span class="num">100</span>家企业</div>
            <div>所信赖的商业合作伙伴</div>
          </div>
          <div class="friends-box">
              <swiper class="swiper r-nw-fs-c" @change="friendsChange">
                <swiper-item class="item border-box r-w-sb-c" v-for="(i,k) in friends" :key = k>
                    <div class="logo-box c-c-c" v-for="(i1,k1) of i" :key = k1>
                      <img mode='widthFix' :src="i1.logo" alt="">
                    </div>
                </swiper-item>
              </swiper>
          </div> 
          <div class="dots r-nw-c-c">
            <div class="item" v-for="(i,k) in friends" :key = k :style="{background:currentFriend != k ? 'rgba(224, 224, 224, .4)':'rgba(224, 224, 224,1)'}"></div>
          </div>
        </div>
        <div class="cantact">
          <HomeTitle cn='联系我们' en='CONTACT US'></HomeTitle>
          <map name="map" class="map" :longitude="config.lng" scale='14' :latitude="config.lat" :markers="markers" ></map>
          <div class="address pf r-nw-fs-c">
            <img class="icon" mode="aspectFit" v-if="site" :src="site+'/img/public/address-blue.png'" alt="">
            <div>
              {{config.company_address}}
            </div>
            <img class="right" mode="aspectFit" v-if="site" :src="site+'/img/public/right-gray.png'" alt="">
          </div>
          <div class="space" v-if="config.company_phone"></div>
          <div class="address r-nw-fs-c" v-if="config.company_phone" @click="makePhoneCall">
            <img class="icon" mode="aspectFit" v-if="site" :src="site+'/img/public/phone-blue.png'" alt="">
            <div>
              {{config.company_phone}}
            </div>
            <img class="right" mode="aspectFit" v-if="site" :src="site+'/img/public/right-gray.png'" alt="">
          </div>
        </div>
        <QuXiang num=0></QuXiang>
    </div>
</template>
<script>
import QuXiang from "../../components/qu-xiang.vue";
import HomeTitle from "../../components/home-title.vue";
import { banner } from "../../api/banner.js";
import { home } from "../../api/home.js";
import { company } from "../../api/company.js";
import { friends_list } from "../../api/friends.js";
export default {
  data() {
    return {
      site: this.$site,
      loading: true,
      home: {
        flow_faq: {},
        cases: [
          {
            qrcode: ""
          }
        ],
        team: [],
        advantage: []
      },
      qrcodeIsShow: false,
      // 顶部轮播图
      topImage: [
        {
          image: this.$site + "/img/case/top-bg.png",
          title: "一切只为您的信赖",
          sub_title: "值得信赖的互联网技术服务商"
        },
        {
          image: this.$site + "/img/case/top-bg.png",
          title: "一切只为您的信赖",
          sub_title: "值得信赖的互联网技术服务商"
        },
        {
          image: this.$site + "/img/case/top-bg.png",
          title: "一切只为您的信赖",
          sub_title: "值得信赖的互联网技术服务商"
        }
      ],
      // 主营业务
      business: [
        {
          icon: this.$site + "/img/home/ouricon-select1.png",
          text: "小程序开发",
          url: "../businessWpg/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select2.png",
          text: "公众号运营",
          url: "../businessPublic/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select3.png",
          text: "微信小游戏",
          url: "../businessWxgame/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select4.png",
          text: "APP定制",
          url: "../businessApp/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select5.png",
          text: "网站建设",
          url: "../businessWeb/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select6.png",
          text: "H5小游戏",
          url: "../businessH5game/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select7.png",
          text: "营销H5",
          url: "../businessH5/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select8.png",
          text: "UI设计",
          url: "../businessUi/main"
        },
        {
          icon: this.$site + "/img/home/ouricon-select9.png",
          text: "平面设计",
          url: "../businessPlane/main"
        }
      ],
      // 解决方案
      solution: [
        {
          img: this.$site + "/img/solution/shapping/top-bg.png",
          title: "电子商务",
          info1: "小程序、公众号一体化微信商城",
          info2: "致力于为零售业搭建多渠道电商销售体系",
          url: "../businessShopping/main"
        },
        {
          img: this.$site + "/img/solution/beauty/top-bg.png",
          title: "美业",
          info1: "小程序、公众号一体化微信商城",
          info2: "致力于为零售业搭建多渠道电商销售体系",
          url: "../businessBeauty/main"
        }
      ],
      currentTab: 0,
      // 全方位服务保障
      currentFaqTab: 0,
      // 全方位的保障服务title
      guaranteeList: [
        {
          title: "资讯评估"
        },
        {
          title: "合作敲定"
        },
        {
          title: "方案设计"
        },
        {
          title: "项目开发"
        },
        {
          title: "交付测试"
        },
        {
          title: "维护护航"
        }
      ],
      markers: [],
      config: {
        lat: "",
        lng: ""
      },
      friends: [],
      currentFriend: 0
    };
  },
  onLoad() {
    // banner({ type: 1 })
    //   .then(res => {
    //     this.topImage = res.data;
    //   })
    //   .catch(e => {});
    let num = 0;
    let checkLoading = () => {
      num++;
      if (num == 3) {
        this.loading = false;
      }
    };
    home().then(res => {
      this.home = res.data;
      checkLoading();
    });
    company().then(res => {
      this.config = res.data;
      this.markers = [
        {
          id: 1,
          latitude: this.config.lat,
          longitude: this.config.lng,
          iconPath: this.$site + "/img/public/address-blue.png",
          width: 15,
          height: 20
        }
      ];
      checkLoading();
    });
    friends_list({ type: 3 }).then(res => {
      this.friends = res.data;
      checkLoading();
    });
  },
  onShow() {
    wx.hideTabBar();
  },
  onShareAppMessage() {
    
  },
  methods: {
    // 合作伙伴滑动
    friendsChange(e) {
      this.currentFriend = e.mp.detail.current;
    },
    // 服务跳转
    skip(i, k) {
      wx.navigateTo({ url: i.url });
    },
    // 全屏打开图片
    previewImage(e) {
      var current = e;
      wx.previewImage({
        current: current,
        urls: [current]
      });
    },
    // 合作案例滑动
    nextPrev(i) {
      let len = this.home.cases.length - 1;
      if (i > 1) {
        if (this.currentTab == len) {
          this.currentTab = 0;
          return;
        }
        this.currentTab = this.currentTab + 1;
      } else {
        if (this.currentTab == 0) {
          this.currentTab = len;
          return;
        }
        this.currentTab = this.currentTab - 1;
      }
    },
    // 聚米学院查看详情
    checkNewsDetail(i, k) {
      let url = `../newsDetail/main?id=${i.id}`;
      wx.navigateTo({ url: url });
    },
    checkQrcode() {
      this.qrcodeIsShow = !this.qrcodeIsShow;
    },
    // 全方位合作保障滑动
    change(e) {
      this.currentFaqTab = e.mp.detail.current;
    },
    // 查看案例详情
    checkDetail() {
      let id = this.home.cases[this.currentTab].id;
      console.log(id);
      let url = `../../pages/casesDetail/main?id=${id}`;
      wx.navigateTo({ url: url });
    },
    // 查看跟多
    checkMore() {
      wx.switchTab({ url: "../news/main" });
    },
    // 打电话
    makePhoneCall() {
      wx.makePhoneCall({
        phoneNumber: this.config.company_phone
      });
    }
  },
  components: {
    QuXiang,
    HomeTitle
  }
};
</script>
<style lang="scss" scoped>
.top-swiper {
  width: 100%;
  height: 348rpx;
  .item {
    position: relative;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .title {
      letter-spacing: 1rpx;
      margin: 122rpx 0 27rpx 0;
      font-size: 39rpx;
    }
    .info {
      font-size: 20rpx;
      opacity: 0.6;
    }
  }
}
.business {
  width: 100%;
  background: white;
  margin: 0 0 30rpx 0;
  .item {
    width: 33%;
    margin: 0 0 50rpx 0;
    img {
      max-width: 78rpx;
      height: 60rpx;
      margin: 0 0 30rpx 0;
    }
    .text {
      font-size: 26rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
}
.solution {
  background: white;
  width: 100%;
  padding: 0 0 20rpx 0;
  margin: 0 0 20rpx 0;
  .item {
    width: 690rpx;
    height: 273rpx;
    position: relative;
    margin: 20rpx 0;
    color: rgba(255, 255, 255, 1);
    .bg {
      width: 100%;
      height: 100%;
    }
    .title {
      position: absolute;
      font-size: 34rpx;
      font-weight: 500;
      top: 79rpx;
    }
    .info1,
    .info2 {
      position: absolute;
      font-size: 20rpx;
      font-weight: 500;
    }
    .info1 {
      top: 152rpx;
    }
    .info2 {
      top: 182rpx;
    }
  }
}
.case {
  width: 100%;
  background: white;
  padding: 0 0 50rpx 0;
  margin: 0 0 20rpx 0;
  position: relative;
  .left,
  .right {
    width: 41rpx;
    height: 41rpx;
    position: absolute;
    top: 150rpx;
    z-index: 999;
  }
  .left {
    left: 28rpx;
  }
  .right {
    right: 28rpx;
    transform: rotateY(180deg);
  }
  .swiper {
    height: 570rpx;
    width: 678rpx;
    .item {
      .img {
        width: 83%;
      }
      .title {
        font-size: 28rpx;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin: 58rpx 0 40rpx 0;
      }
      .info {
        font-size: 22rpx;
        font-weight: bold;
        color: rgba(162, 162, 162, 1);
        line-height: 42rpx;
      }
    }
  }
  .check {
    width: 100%;
    margin: 35rpx 0 0 0;
    .check-detail {
      width: 225rpx;
      height: 57rpx;
      background: rgba(34, 80, 158, 1);
      border-radius: 29rpx;
      font-size: 24rpx;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .check-qrcode {
      width: 225rpx;
      height: 57rpx;
      border: 1rpx solid rgba(34, 80, 158, 1);
      border-radius: 29rpx;
      font-size: 24rpx;
      font-weight: bold;
      color: rgba(34, 80, 158, 1);
      position: relative;
      .box {
        position: absolute;
        width: 244rpx;
        height: 286rpx;
        z-index: 1;
        top: -286rpx;
        left: 0;
        .bg {
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          position: absolute;
          z-index: -1;
        }
        .qrcode {
          width: 160rpx;
          height: 160rpx;
        }
        div {
          font-size: 20rpx;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 29px;
        }
      }
    }
  }
}
.faq {
  width: 100%;
  height: 578rpx;
  position: relative;
  .title {
    padding: 50rpx 0 0 0;
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .swiper-box {
    position: absolute;
    width: 90%;
    height: 190rpx;
    top: 185rpx;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    // background: gray;
    .line {
      transition: 0.1s all linear;
      position: absolute;
      top: 30%;
      width: 100%;
      height: 2px;
      background: rgba(255, 255, 255, 1);
      opacity: 0.5;
    }
    .swiper {
      height: 100%;
      .item {
        position: absolute;
        .title {
          margin: 40rpx 0 0 0;
          padding: 0;
          font-size: 20rpx;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        .point {
          position: absolute;
          top: 26.5%;
          left: 50%;
          transform: translateX(-50%);
          width: 18rpx;
          height: 18rpx;
          background: rgba(255, 255, 255, 1);
          border-radius: 50%;
        }
        .active {
          font-size: 30rpx;
          font-weight: 500;
        }
        .active-point {
          position: absolute;
          top: 22%;
          left: 50%;
          transform: translateX(-50%);
          width: 35rpx;
          height: 35rpx;
        }
      }
    }
  }
  .qa {
    width: 690rpx;
    height: 181rpx;
    margin: 30rpx 0;
    padding: 20rpx 0 0 10rpx;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    bottom: 0;
    font-size: 20rpx;
    font-weight: 400;
    color: rgba(51, 51, 51, 0.7);
    .qa-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      top: 0;
      left: 0;
    }
    .q,
    .a {
      margin: 10rpx 0 10rpx 20rpx;
      width: 85%;
      line-height: 29rpx;
    }
  }
}
.team {
  width: 100%;
  height: auto;
  margin: 20rpx 0;
  background: white;
  .list {
    width: 100%;
    .item {
      width: 23%;
      margin: 0 0 47rpx;
      .img {
        width: 100%;
        height: 210rpx;
        border-radius: 50%;
      }
      .name {
        font-size: 26rpx;
        font-weight: 500;
        color: rgba(85, 85, 85, 1);
        margin: 28rpx 0 24rpx 0;
      }
      .post {
        font-size: 24rpx;
        font-weight: 500;
        text-align: center;
        color: rgba(85, 85, 85, 1);
      }
    }
  }
}
.advantage {
  width: 100%;
  margin: 20rpx 0;
  background: white;
  padding: 0 0 30rpx 0;
  .list {
    width: 100%;
    .item {
      margin: 10rpx;
      width: 334rpx;
      padding: 40rpx 0 50rpx;
      background: rgba(245, 245, 245, 1);
      .title-box {
        margin: 0 0 13rpx 0;
        img {
          height: 30rpx;
          max-width: 50rpx;
          margin: 0 13rpx 0 0;
        }
        .text {
          font-size: 24rpx;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
      }
      .info {
        width: 80%;
        font-size: 20rpx;
        font-weight: 400;
        color: rgba(136, 136, 136, 0.7);
        line-height: 35rpx;
      }
    }
  }
}
.jumi {
  width: 100%;
  margin: 20rpx 0;
  padding: 0 0 30rpx 0;
  background: white;
  .list {
    margin: 27rpx 0;
    .item {
      width: 690rpx;
      margin: 25rpx auto;
      padding: 40rpx 40rpx;
      height: 231rpx;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2rpx 14rpx 2rpx rgba(114, 114, 114, 0.09);
      .left {
        width: 23%;
        height: 100%;
        .day {
          font-size: 60rpx;
          font-weight: 400;
          color: rgba(136, 136, 136, 1);
        }
        .space {
          width: 38rpx;
          height: 2rpx;
          background: rgba(136, 136, 136, 1);
        }
        .year {
          font-size: 24rpx;
          font-weight: 400;
          color: rgba(136, 136, 136, 1);
        }
      }
      .middle {
        width: 2rpx;
        height: 148rpx;
        background: rgba(210, 210, 210, 1);
        opacity: 0.5;
        margin: 0 50rpx 0 0;
      }
      .right {
        width: 65%;
        height: 100%;
        .top {
          font-size: 28rpx;
          width: 90%;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 41rpx;
        }
        .bottom {
          width: 100%;
          div {
            font-size: 24rpx;
            font-weight: 400;
            color: rgba(136, 136, 136, 1);
          }
          img {
            width: 45rpx;
            height: 21rpx;
          }
        }
      }
    }
    .one {
      width: 690rpx;
      margin: -50rpx auto 25rpx;
      height: 369rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
      }
      .title {
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 75rpx;
        font-size: 24rpx;
        font-weight: 500;
        padding: 0 0 0 20rpx;
        color: rgba(255, 255, 255, 1);
        line-height: 75rpx;
      }
    }
  }
  .more {
    width: 690rpx;
    height: 59rpx;
    margin: 20rpx auto 0;
    background: rgba(248, 248, 248, 1);
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 48rpx;
  }
}
.friends {
  width: 100%;
  margin: 20rpx 0;
  background: white;
  padding: 20rpx 0 30rpx;
  .title {
    width: 298rpx;
    height: 79rpx;
    margin: 55rpx auto 60rpx;
    font-size: 28rpx;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 46rpx;
    .num {
      font-family: 40rpx;
      color: #22509e;
    }
  }
  .friends-box {
    width: 100%;
    .swiper {
      width: 100%;
      height: 900rpx;
      .item {
        padding: 0 45rpx;
        width: 100%;
        .logo-box {
          width: 45%;
          img {
            width: 80%;
          }
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
.cantact {
  width: 100%;
  // height: 756rpx;
  margin: 10rpx 0 170rpx;
  padding: 0 0 30rpx 0;
  background: rgba(255, 255, 255, 1);
  .map {
    width: 690rpx;
    height: 341rpx;
    margin: -20rpx auto 50rpx;
  }
  .address {
    width: 690rpx;
    height: 88rpx;
    margin: 0 auto 0;
    .icon {
      width: 22rpx;
      margin: 0 20rpx 0 0;
    }
    .right {
      width: 13rpx;
      margin: 0 0 0 auto;
    }
    div {
      font-size: 26rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .space {
    width: 690rpx;
    height: 1rpx;
    margin: 0 auto;
    background: rgba(220, 220, 220, 1);
  }
}
</style>
