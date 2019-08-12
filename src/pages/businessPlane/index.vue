<template>
    <div v-if="!loading">
        <div class="top">
          <img :src="top.bg" alt="" class="bg">
          <div class="box pf border-box">
            <div class="title">{{top.title}}</div>
            <div class="space"></div>
            <div class="sub-title">{{top.subTitle1}}</div>
            <div class="sub-title sub-title2">{{top.subTitle2}}</div>
            <div class="text1">{{top.text1}}</div>
            <div class="text1">{{top.text2}}</div>
          </div>
        </div>
        <div class="content border-box">
            <div class="public-title c-c-c">
              <div class="title">服务内容</div>
              <div class="space"></div>
            </div>
            <div class="list1 pf c-c-c">
              <div class="item r-nw-c-c" v-for="(i,k) in list1" :key = k>
                <img class="icon" :src="i.icon"  alt="">
                <div class="info-box c-c-fs">
                  <div class="title">{{i.title}}</div>
                  <div class="info">{{i.info}}</div>
                </div>
              </div>
            </div>
            <div class="public-title c-c-c">
              <div class="title">合作案例</div>
              <div class="space"></div>
            </div>
            <div class="cases pf border-box r-w-sb-c">
                <div class="item c-fs-c" v-for="(i,k) in cases" @click="checkDetail(i,k)" :key = k>
                  <img :src="i.cover_image" alt="">
                  <div class="title">{{i.title}}</div>
                  <div class="info">{{i.cate.name}}</div>
                </div>
            </div>
            <div class="check-more c-c-c" @click="checkMore()">
              查看更多
            </div>
            <div class="friends border-box">
              <div class="public-title c-c-c">
                <div class="title">合作伙伴</div>
                <div class="space"></div>
              </div>
              <img v-if="site" :src="site + '/img/business/plane/friends-bg.png'" alt="">
            </div>
            <div class="company-box pf c-fs-c">
              <img v-if="site" :src="site + '/img/public/logo-black.png'" alt="">
              <div class="en-title">BRAND DESIGN INTEGRATOR JUMI THE AGE OF BIG DATA</div>
              <div class="cn-title">聚米互创只为解答您的品牌难题</div>
            </div>
            <div class="logo-box">
              <div class="one c-c-c">
                <img class="logo" :src="i.logo" v-for="(i,k) in logo" v-if="k == 0" :key = k alt="">
              </div>
              <div class="two r-nw-c-c">
                <img class="logo" :src="i.logo" v-for="(i,k) in logo" v-if="k == 1 || k == 2" :key = k alt="">
              </div>
              <div class="three r-nw-c-c">
                <img class="logo" :src="i.logo" v-for="(i,k) in logo" v-if="k > 2 && k< 6" :key = k alt="">
              </div>
              <div class="four r-nw-c-c">
                <img class="logo" :src="i.logo" v-for="(i,k) in logo" v-if="k == 6 || k == 7" :key = k alt="">
              </div>
              <div class="five r-nw-c-c">
                <img class="logo" :src="i.logo" v-for="(i,k) in logo" v-if="k == 8" :key = k alt="">
              </div>
            </div>
            <div class="bottom c-c-c">
                TO SOLVE THE PROBLEM, EXPERT ANWERS !
            </div>
        </div>
    </div>
</template>
<script>
import BussinessTop2 from "../../components/business-top2";
import { case_plane } from "../../api/case.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "平面设计服务",
        subTitle1: "互联网+时代，一切可能从官网开始",
        subTitle2: "用心打造企业与客户的最强连接器",
        bg: this.$site + "/img/business/plane/top-bg.png",
        text1: "在大数据时代，品牌设计不再是一个单一的形象设计。",
        text2:
          "而是需要4V+ID的高效精准模式进行定位分析，解析出市场需要的品牌符号，进而进行精准的创意。"
      },
      list1: [
        {
          icon: this.$site + "/img/business/plane/list1-1.png",
          title: "LOGO/VI视觉手册设计",
          info:
            "VI设计师企业落实品牌形象的符号，最具辨识度且具有唯一性，以品牌logo为核心展开，包括周边所有的办公用品、旗帜、门牌等。让企业形象达到高度统一、明了。"
        },
        {
          icon: this.$site + "/img/business/plane/list1-2.png",
          title: "海报/易拉宝设计",
          info:
            "VI设计师企业落实品牌形象的符号，最具辨识度且具有唯一性，以品牌logo为核心展开，包括周边所有的办公用品、旗帜、门牌等。让企业形象达到高度统一、明了。"
        },
        {
          icon: this.$site + "/img/business/plane/list1-3.png",
          title: "LOGO/VI视觉手册设计",
          info:
            "VI设计师企业落实品牌形象的符号，最具辨识度且具有唯一性，以品牌logo为核心展开，包括周边所有的办公用品、旗帜、门牌等。让企业形象达到高度统一、明了。"
        },
        {
          icon: this.$site + "/img/business/plane/list1-4.png",
          title: "LOGO/VI视觉手册设计",
          info:
            "VI设计师企业落实品牌形象的符号，最具辨识度且具有唯一性，以品牌logo为核心展开，包括周边所有的办公用品、旗帜、门牌等。让企业形象达到高度统一、明了。"
        }
      ],
      logo: [
        {
          logo: this.$site + "/img/business/plane/logo1.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo2.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo3.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo4.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo5.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo6.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo7.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo8.png"
        },
        {
          logo: this.$site + "/img/business/plane/logo9.png"
        }
      ],
      cases: []
    };
  },
  onLoad() {
    case_plane({ cate: 5, page_size: 4, show_in_home_page: 0, page: 1 }).then(
      res => {
        this.cases = res.data.rows;
        this.loading = false;
      }
    );
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    checkDetail(i, k) {
      let url = `../casesDetail/main?id=${i.id}`
      wx.navigateTo({ url: url });
    },
    checkMore(i, k) {
      let url = '../case/main';
      wx.switchTab({ url: url });
    }
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 652rpx;
  position: relative;
  .bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .box {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 0 0 0 30rpx;
    .title {
      height: 31rpx;
      font-size: 32rpx;
      font-weight: bold;
      color: rgba(15, 43, 154, 1);
      margin: 67rpx 0 0 0;
    }
    .space {
      width: 62rpx;
      height: 3rpx;
      margin: 35rpx 0 18rpx 0;
      background: rgba(15, 43, 154, 1);
    }
    .sub-title {
      width: 302rpx;
      font-size: 24rpx;
      font-family: FZLTCXHJW--GB1-0;
      font-weight: 400;
      color: rgba(15, 43, 154, 1);
      line-height: 36rpx;
      margin: 0 0 20rpx 0;
    }
    .sub-title2 {
      width: 230rpx;
      margin: 0 0 163rpx 0;
    }
    .text1 {
      width: 666rpx;
      font-size: 24rpx;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 36rpx;
      margin: 0 0 30rpx 0;
    }
  }
}
.public-title {
  margin: 67rpx 0 88rpx 0;
  .title {
    font-size: 30rpx;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 36rpx;
    margin: 0 0 46rpx 0;
  }
  .space {
    width: 200rpx;
    height: 2rpx;
    background: rgba(20, 43, 159, 1);
  }
}
.content {
  background-color: white;
  padding: 1rpx 0;
}
.list1 {
  width: 100%;
  .item {
    width: 690rpx;
    height: 400rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 7rpx 29rpx 2rpx rgba(144, 144, 144, 0.2);
    margin: 20rpx auto;
    .icon {
      width: 99rpx;
      height: 99rpx;
      margin: 0 49rpx 0 0;
    }
    .info-box {
      .title {
        font-size: 28rpx;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        line-height: 36rpx;
        margin: 0 0 48rpx 0;
      }
      .info {
        width: 419rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
        line-height: 40rpx;
      }
    }
  }
}
.cases {
  padding: 0 30rpx;
  margin: 0 0 95rpx 0;
  .item {
    width: 335rpx;
    height: 400rpx;
    background: rgba(247, 247, 247, 1);
    margin: 20rpx 0;
    img {
      width: 100%;
      height: 259rpx;
      margin: 0 0 36rpx 0;
    }
    .title {
      font-size: 28rpx;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      margin: 0 0 15rpx;
    }
    .info {
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
    }
  }
}
.check-more {
  margin: 0 auto 162rpx;
  width: 222rpx;
  height: 65rpx;
  background: rgba(20, 43, 159, 1);
  font-size: 26rpx;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.friends {
  position: relative;
  width: 100%;
  height: 290rpx;
  padding: 1rpx 0;
  .public-title {
    position: relative;
    z-index: 2;
    .title {
      color: rgba(255, 255, 255, 1);
    }
    .space {
      background-color: white;
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
}
.company-box {
  margin: -89rpx auto 84rpx;
  position: relative;
  z-index: 3;
  width: 690rpx;
  height: 500rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2rpx 12rpx 1rpx rgba(176, 176, 176, 0.3);
  img {
    width: 213rpx;
    height: 65rpx;
    margin: 89rpx 0 84rpx;
  }
  .en-title {
    text-align: center;
    width: 424rpx;
    font-size: 22rpx;
    font-family: ArialMT;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 36rpx;
    margin: 0 0 74rpx;
  }
  .cn-title {
    width: 382rpx;
    font-size: 26rpx;
    font-weight: 500;
    color: rgba(34, 34, 34, 1);
  }
}
.bottom {
  margin: 103rpx auto 225rpx;
  width: 686rpx;
  height: 100rpx;
  border: 1rpx solid rgba(15, 43, 154, 1);
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(15, 43, 154, 1);
  line-height: 36rpx;
}

.logo-box {
  height: 684rpx;
  width: 100%;
  .logo {
    width: 215rpx;
    height: 215rpx;
    margin: 0 15rpx;
  }
  .two,
  .three,
  .four,
  .five {
    margin: -90rpx 0 0 0;
  }
}
</style>
