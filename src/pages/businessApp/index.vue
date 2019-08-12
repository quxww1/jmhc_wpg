<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="box pf top">
          <div class="public-title pf c-c-c">
            <div class="title">手机应用软件价值</div>
            <div class="space"></div>
          </div>
          <div class="text1">随着智能手机的普及，用户越来越依赖手机APP应用软件</div>
          <div class="text2">手机应用软件开发可以帮助企业实现精准营销。APP将企业的最新信息快速精准的传达给目标客户。可以通过手机APP随时随地传达信息给客户，不会受时间跟空间等原因受阻。提高用户的粘度，留住新老客户，让他们成为企业中最好的口碑传播者。服务于现有客户，提升客户的满意度，并促成二次消费。</div>
          <div class="list r-nw-c-c">
            <div class="item c-c-c" v-for="(i,k) in list1" :key = k>
                <img mode='aspectFit' :src="i.icon" alt="">
                <div class="space"></div>
                <div class="title pf">{{i.title}}</div>
            </div>
          </div>
        </div>
        <div class="box fn">
          <div class="public-title pf c-c-c">
            <div class="title">APP定制功能</div>
            <div class="space"></div>
          </div>
          <div class="list r-w-fs-c">
            <div class="item c-c-c" v-for="(i,k) in list2" :key = k>
              <img mode='widthFix' :src="i.icon" alt="">
              <div>{{i.title}}</div>
            </div>
          </div>
        </div>
        <div class="box imagine">
          <div class="public-title pf c-c-c">
            <div class="title">我们能解决的 一定超乎你的想象</div>
            <div class="space"></div>
          </div>
          <div class="list r-w-sb-c">
            <div class="item" v-for="(i,k) in list3" :key = k>
              <img class="bg" :src="i.bg" alt="">
              <div class="content c-c-c">
                <img mode='aspectFit' :src="i.icon" alt="">
                <div class="title">{{i.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="box advantage">
          <div class="public-title pf c-c-c">
            <div class="title">我们能解决的 一定超乎你的想象</div>
            <div class="space"></div>
          </div>
          <div class="list r-w-sb-c">
            <div class="item pf c-c-c" v-for="(i,k) in list4" :key = k>
                <div class="icon-box r-nw-c-c">
                  <img mode='aspectFit' :src="i.icon" alt="">
                  <div class="title">{{i.title}}</div>
                </div>
                <div class="info">
                  {{i.info}}
                </div>
            </div>
          </div>
        </div>
        <div class="process box">
          <div class="public-title pf c-c-c">
            <div class="title">APP开发流程</div>
            <div class="space"></div>
          </div>
          <img v-if="site" :src="site + '/img/business/app/process.png'" alt="">
        </div>
        <div class="case box">
          <div class="public-title pf c-c-c">
            <div class="title">APP案例展示</div>
            <div class="space"></div>
          </div>
          <div class="list r-w-sb-c border-box">
            <div class="item c-fs-c" @click="checkDetail(i,k)" v-for="(i,k) in cases" :key=k>
              <img class="img" :src="i.cover_image" alt="">
              <div class="title c-c-c pf">{{i.title}}</div>
            </div>
          </div>
          <div class="checkmore c-c-c" @click="checkMore()">查看更多</div>
        </div>
    </div>
</template>
<script>
import BussinessTop2 from "../../components/business-top2";
import { case_list } from "../../api/case.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "APP定制开发服务",
        subTitle: "从0到1的微信代运营服务平台专注企业微生态构建及营销服务",
        bg: this.$site + "/img/business/app/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/business/app/list1-1.png",
          title: "大数据"
        },
        {
          icon: this.$site + "/img/business/app/list1-2.png",
          title: "互动性"
        },
        {
          icon: this.$site + "/img/business/app/list1-3.png",
          title: "用户粘性"
        }
      ],
      list2: [
        {
          icon: this.$site + "/img/business/app/list2-1.png",
          title: "LBS定位"
        },
        {
          icon: this.$site + "/img/business/app/list2-2.png",
          title: "与微博等登录系统对接"
        },
        {
          icon: this.$site + "/img/business/app/list2-3.png",
          title: "摇一摇"
        },
        {
          icon: this.$site + "/img/business/app/list2-4.png",
          title: "与业务系统对接"
        },
        {
          icon: this.$site + "/img/business/app/list2-5.png",
          title: "二维码"
        },
        {
          icon: this.$site + "/img/business/app/list2-6.png",
          title: "移动支付"
        },
        {
          icon: this.$site + "/img/business/app/list2-7.png",
          title: "图形图表"
        },
        {
          icon: this.$site + "/img/business/app/list2-8.png",
          title: "分享QQ、微信、微博等"
        },
        {
          icon: this.$site + "/img/business/app/list2-9.png",
          title: "多文件上传"
        },
        {
          icon: this.$site + "/img/business/app/list2-10.png",
          title: "微信二次开发"
        },
        {
          icon: this.$site + "/img/business/app/list2-11.png",
          title: "文本、语音、视频即时聊天"
        }
      ],
      list3: [
        {
          icon: this.$site + "/img/business/app/list3-1.png",
          bg: this.$site + "/img/business/app/list-bg-3-1.png",
          text: "聊天社区类"
        },
        {
          icon: this.$site + "/img/business/app/list3-2.png",
          bg: this.$site + "/img/business/app/list-bg-3-2.png",
          text: "聊天社区类"
        },
        {
          icon: this.$site + "/img/business/app/list3-3.png",
          bg: this.$site + "/img/business/app/list-bg-3-3.png",
          text: "聊天社区类"
        },
        {
          icon: this.$site + "/img/business/app/list3-4.png",
          bg: this.$site + "/img/business/app/list-bg-3-4.png",
          text: "聊天社区类"
        },
        {
          icon: this.$site + "/img/business/app/list3-5.png",
          bg: this.$site + "/img/business/app/list-bg-3-5.png",
          text: "聊天社区类"
        }
      ],
      list4: [
        {
          icon: this.$site + "/img/business/app/list4-1.png",
          title: "我们更懂行",
          info: "多年品牌营销策划及移动营销经验对市场营销了若指掌"
        },
        {
          icon: this.$site + "/img/business/app/list4-2.png",
          title: "我们更领先",
          info: "最早涉足移动营销技术/理念/系统更领先"
        },
        {
          icon: this.$site + "/img/business/app/list4-3.png",
          title: "我们更系统",
          info: "品牌营销为导向的全方位移动营销体系囊括推广/咨询"
        },
        {
          icon: this.$site + "/img/business/app/list4-4.png",
          title: "我们更敏锐",
          info: "资深市场一线人员、移动领域专业工程师共同参与研发"
        }
      ],
      cases: []
    };
  },
  onLoad() {
    case_list({ cate: 3, page_size: 4 }).then(res => {
      this.cases = res.data.rows;
      this.loading = false;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    checkDetail(i, k) {
      let url = `../casesDetail/main?id=${i.id}`;
      wx.navigateTo({ url: url });
    },
    checkMore() {
      let url = "../case/main";
      wx.switchTab({ url: url });
    }
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 1rpx 0;
  background-color: white;
  box-sizing: border-box;
  margin: 0 0 20rpx 0;
}
.public-title {
  margin: 53rpx 0;
  .title {
    font-size: 28rpx;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 36rpx;
    margin: 0 0 27rpx 0;
  }
  .space {
    width: 87rpx;
    height: 4rpx;
    background: rgba(0, 34, 104, 1);
  }
}
.top {
  .text1 {
    width: 100%;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(34, 34, 34, 0.9);
    line-height: 40rpx;
    text-align: center;
    margin: 0 0 50rpx 0;
  }
  .text2 {
    width: 683rpx;
    text-indent: 0.5cm;
    margin: 10rpx auto 68rpx;
    font-size: 24rpx;
    font-weight: 500;
    color: rgba(34, 34, 34, 1);
    line-height: 40rpx;
  }
  .list {
    width: 100%;
    margin: 0 0 101rpx 0;
    .item {
      margin: 0 60rpx;
      img {
        height: 58rpx;
        max-width: 65rpx;
      }
      .title {
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
      }
      .space {
        width: 77rpx;
        height: 2rpx;
        margin: 40rpx 0;
        background: rgba(0, 34, 104, 1);
      }
    }
  }
}
.fn {
  margin: 20rpx 0;
  .list {
    width: 100%;
    .item {
      width: 33%;
      margin: 20rpx 0 50rpx;
      img {
        width: 41rpx;
        margin: 0 0 20rpx 0;
      }
      div {
        font-size: 24rpx;
        width: 167rpx;
        text-align: center;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
        line-height: 36rpx;
      }
    }
  }
}
.imagine {
  padding: 1rpx 30rpx 50rpx;
  .list {
    width: 100%;
    .item {
      width: 335rpx;
      height: 200rpx;
      margin: 10rpx 0;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
      }
      .content {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        img {
          height: 80rpx;
          margin: 0 0 25rpx 0;
        }
        .title {
          font-size: 28rpx;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
.advantage {
  padding: 1rpx 30rpx 50rpx;
  .list {
    width: 100%;
    .item {
      width: 335rpx;
      height: 200rpx;
      margin: 10rpx 0;
      border: 1rpx solid rgba(233, 233, 233, 1);
      .icon-box {
        margin: 0 0 25rpx 0;
      }
      img {
        height: 37rpx;
        max-width: 40rpx;
        margin: 0 25rpx 0 0;
      }
      .title {
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
      }
      .info {
        font-size: 22rpx;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 36rpx;
        width: 80%;
      }
    }
  }
}
.process {
  img {
    width: 689rpx;
    height: 300rpx;
    margin: 60rpx auto 33rpx;
    display: block;
  }
}
.case {
  margin: 0;
  .list {
    padding: 0 30rpx;
    .item {
      width: 332rpx;
      height: 333rpx;
      margin: 30rpx 0;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 2rpx 12rpx 1rpx rgba(176, 176, 176, 0.3);
      .img {
        width: 100%;
        height: 269rpx;
      }
      .title {
        height: 64rpx;
        font-size: 21rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 16rpx;
      }
    }
  }
  .checkmore {
    width: 690rpx;
    height: 59rpx;
    background: rgba(245, 245, 245, 1);
    margin: 69rpx auto 78rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
  }
}
</style>
