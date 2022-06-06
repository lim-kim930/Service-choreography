<template>
  <div class="container2" style="padding: 0px 5px 5px 5px;margin-top:50px">
    <div v-show="!success">
      <div class="background"></div>
      <van-cell-group id="11" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);" inset>
        <van-cell :label="'可用余额: ' + user.money + '元'" @click="selectCard" style="padding: 20px 15px">
          <template #title>
            <svg style="position:absolute;top:30px" t="1649026672811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3735" width="25" height="25"><path d="M908.6 189.3H114.3c-48.3 0-49.4 24.9-49.4 84v64.9h893.3v-64.9c0.1-28.1 10.9-84-49.6-84zM65 783.8c0 28.1 22.6 50.9 50.5 50.9h792.2c27.9 0 50.5-22.8 50.5-50.9V376.5H65v407.3z m396.8-247h99.3v49.6h-99.3v-49.6z m-347.5 0h297.9v49.6H114.3v-49.6z m0 99.3h297.9v49.6H114.3v-49.6z" fill="#d50110" p-id="3736"></path></svg>
            <div>
              <h2 style="margin: 10px 0 0 35px;font-size: 20px;">{{user.account}}</h2>
            </div>
          </template>
          <template #right-icon>
            <svg t="1649176780687" style="margin-top: 20px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2200" width="16" height="16"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="2201"></path></svg>
          </template>
        </van-cell>
      </van-cell-group>
      <div style="padding: 20px">
        <h2 style="margin: 10px 0;font-size: 20px;">存入金额</h2>
        <h1 style="margin: 0"><van-field style="height: 70px" v-model="digit" type="digit" label="￥ " placeholder="请输入" /></h1>
        <van-divider style="margin-top:0" />
        <van-cell-group>
          <van-cell title="存期" :value="this.product.time+'个月'" />
          <van-cell title="年利率" :value="this.product.rate+'%'" />
          <van-cell title="到期日期" :value="new Date(new Date().getTime() + product.time*30*24*3600*1000).toLocaleDateString()" />
        </van-cell-group>
      </div>
      <van-button style="width: 60%;margin-left: 20%;position:absolute;bottom:10px" round color="#d50110" @click="goBuy()">立即存入</van-button>
    </div>
    <div v-show="success" class="weui-msg">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">交易成功</h2>
            <h2 class="weui-msg__title">￥ {{this.num.toFixed(2)}}</h2>
            <p class="weui-msg__desc">购买成功, 可在<a class="weui-wa-hotarea weui-link" href="javascript:">个人中心</a>查看已购买的产品</p>
        </div>
        <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
                <a href="#" @click="ok" role="button" class="weui-btn weui-btn_primary">确定</a>
            </p>
        </div>
        <div class="weui-msg__tips-area">
          <van-cell-group>
            <van-cell title="付款账户" :value="this.user.account" />
            <van-cell title="存期" :value="this.product.time+'个月'" />
            <van-cell title="年利率" :value="this.product.rate+'%'" />
            <van-cell title="存入日期" :value="new Date().toLocaleDateString()" />
            <van-cell title="起息日期" :value="new Date().toLocaleDateString()" />
            <van-cell title="到期日期" :value="new Date(new Date().getTime() + product.time*30*24*3600*1000).toLocaleDateString()" />
          </van-cell-group>
        </div>
        <!-- <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:" class="weui-wa-hotarea weui-footer__link">底部链接文本</a>
                </p>
                <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import "../weui.css"
export default {
  data() {
    return {
        loading: true,
        activeName: "a",
        digit: null,
        success: false,
        product:{},
        num: 0,
        user: {}
    }
  },
  props: ["wh"],
  methods: {
    goBuy(){
      const load = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '核验中...',
      });
      setTimeout(() => {
        if(this.user.location !== this.product.location){
          load.clear();
          return this.$toast.success('很抱歉,当前账户不符合存入规则');
        }
        if(this.digit>this.user.money){
          this.$toast.success('余额不足! ');
          this.success = true;
          return 
        }
        this.user.money -= this.digit;
        this.user.product.push({
          name: this.product.name,
          date: new Date().toLocaleString(),
          rate: this.product.rate
        });
        localStorage.setItem("user",JSON.stringify(this.user));
        load.clear();
        this.num = +this.digit
        this.success = true;
        this.$toast.success('购买成功！');
        this.$emit("getTitle","交易结果")
      }, 500);
    },
    selectCard() {
      
    },
    ok(){
      this.$emit("getRouter","User")
      this.$emit("getTitle","个人中心")
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
    this.product = JSON.parse(sessionStorage.getItem("product"))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.background {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #d50110;
}
.radius {
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 2px 10px;
}
</style>
<style lang="less">
.van-tab__text--ellipsis {
  font-size: 16px !important;
}
.van-tab--active {
  color: #ef4f5c !important;
}
.van-tabs__line {
  width: 60px;
}
.container2 .van-cell__label {
  margin-left: 40px;

}
.container2 .van-icon-arrow {
  line-height: 56px;
}
.container2 .van-field input {
  height: 50px
}
.container2 .van-field__label {
  width: 20px;
}
.container2 .van-field .van-cell__title,
.container2 .van-field .van-field__value {
  font-size: 25px;
  line-height: 50px;
}
</style>