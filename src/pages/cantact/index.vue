<template>
    <div v-if="!loading">
        <BaseTop :title=top.title :bg=top.bg :subTitle=top.subTitle></BaseTop>
        <div class="top border-box pf">
            <div class="title">{{detail.company_name}}</div>
            <div class="info pf-light">若您想了解更多我们公司的产品和服务，可以通过以下方式与我们取得联系，我们会为您详细解答！</div>
        </div>
        <div class="qr-box pf">
            <div class="blue-title r-nw-fs-c">
                <div class="blue"></div>
                <div class="title">联系聚米 | contact JuMi</div>
            </div>
            <div class="info" v-if="detail.company_phone" @click="call(detail.company_phone)">电话：{{detail.company_phone}}</div>
            <div class="info" v-if="detail.company_email">邮箱：{{detail.company_email}}</div>
            <div class="info" v-if="detail.company_official_website" @click="toWeb(detail.company_official_website)">官网：{{detail.company_official_website}}</div>
            <div class="info" v-if="detail.company_address">地址：{{detail.company_address}}</div>
            <div class="qrcode-box c-c-c" v-if="detail.wechat_qrcode">
                <img :src="detail.wechat_qrcode" @click="previewImage(detail.wechat_qrcode)"  alt="">
                <div>集团微信</div>
            </div>
        </div>
        <map name="map" class="map" :longitude="detail.lng" scale='14' :latitude="detail.lat" :markers="markers" ></map>
        <div class="msg c-fs-c">
            <div class="blue-title r-nw-fs-c">
                <div class="blue"></div>
                <div class="title">反馈留言 | Feedback message</div>
            </div>
            <input class="input" type="text" maxlength="10" v-model="form.name" placeholder="您的姓名">
            <input class="input" type="text" maxlength="11" v-model="form.contact" placeholder="您的电话">
            <textarea class="inputarea" type="text" maxlength="100" v-model="form.content" placeholder="添加留言"></textarea>
            <div class="submit c-c-c" @click="submit">
                提交
            </div>
        </div>
        <div class="pad"></div>
        <QuXiang num=4></QuXiang>
    </div>
</template>
<script>
import QuXiang from "../../components/qu-xiang.vue";
import BaseTop from "../../components/base-top.vue";
import { company } from "../../api/company.js";
import { leave_message } from "../../api/msg.js";
export default {
  data() {
    return {
      markers: [],
      loading: true,
      top: {
        title: "卓越品质  精益求精  企业梦想  一起追逐",
        subTitle:
          "EXCELLENT QUALITY AND EXCELLENT ENTERPRISE DREAM CHASING TOGETHER",
        bg: this.$site + "/img/contact/top-bg.png"
      },
      detail: {},
      form: {
        name: "",
        content: "",
        contact: ""
      }
    };
  },
  onLoad() {
    company().then(res => {
      this.detail = res.data;
      this.loading = false;
      this.markers = [
        {
          id: 1,
          latitude: this.detail.lat,
          longitude: this.detail.lng,
          iconPath: this.$site + "/img/public/map-icon.png",
          width: 100,
          height: 60
        }
      ];
    });
  },
  onShow() {
    wx.hideTabBar();
  },
  onShareAppMessage() {
    
  },
  methods: {
    // 全屏打开图片
    previewImage(e) {
      var current = e;
      wx.previewImage({
        current: current,
        urls: [current]
      });
    },
    toWeb(i) {
      let url = `../website/main?site=${i}`;
      wx.navigateTo({ url });
    },
    call(i) {
      wx.makePhoneCall({ phoneNumber: i });
    },
    submit() {
      let f = this.form;
      if (f.name == "") {
        this.tips("姓名不能为空");
        return;
      }
      if (f.content == "") {
        this.tips("内容不能为空");
        return;
      }
      if (f.contact == "") {
        this.tips("联系方式不能为空");
        return;
      }

      leave_message(this.form).then(res => {
        if (res.code == 200) {
          this.tips("留言成功", 1);
          f.name = '';
          f.content = '';
          f.contact = '';
        } else {
          this.tips(res.msg);
        }
      });
    },
    tips(e, isIcon) {
      wx.showToast({
        title: e, //提示的内容,
        icon: isIcon ? "success" : "none", //图标,
        duration: 1000 //延迟时间,
      });
    }
  },

  components: {
    QuXiang,
    BaseTop
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding: 45rpx 0 45rpx 31rpx;
  margin: 0 0 20rpx 0;
  .title {
    font-size: 30rpx;
    font-weight: normal;
    color: rgba(51, 51, 51, 1);
    line-height: 58rpx;
  }
  .info {
    width: 680rpx;
    font-size: 22rpx;
    font-weight: 200;
    color: rgba(51, 51, 51, 1);
    line-height: 35rpx;
  }
}
.qr-box {
  background-color: white;
  padding: 0 0 70rpx 0;
  box-sizing: border-box;
  .info {
    padding: 0 0 0 30rpx;
    margin: 50rpx 0;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 22rpx;
  }
  .qrcode-box {
    img {
      width: 268rpx;
      height: 268rpx;
      margin: 69rpx 0 30rpx 0;
    }
    div {
      font-size: 26rpx;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 22rpx;
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
.map {
  height: 342rpx;
  width: 100%;
  margin: 20rpx 0;
}
.msg {
  padding: 1rpx 0;
  width: 100%;
  background: white;
  .submit {
    margin: 43rpx auto 63rpx;
    width: 181rpx;
    height: 62rpx;
    background: rgba(34, 80, 158, 1);
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22rpx;
  }
  .input {
    width: 690rpx;
    height: 112rpx;
    margin: 18rpx 0;
    box-sizing: border-box;
    padding: 0 20rpx;
    background: rgba(250, 250, 250, 1);
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 22rpx;
  }
  .inputarea {
    box-sizing: border-box;
    padding: 20rpx;
    width: 690rpx;
    height: 321rpx;
    background: rgba(250, 250, 250, 1);
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 22rpx;
  }
}
</style>
