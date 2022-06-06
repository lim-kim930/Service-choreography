<template>
  <div class="container" style="padding: 0px 5px 5px 5px;margin-top:50px">
    <div class="background"></div>
    <van-cell-group class="ddd" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);" inset>
      <van-cell label="年利率" style="padding-bottom: 25px">
        <template #title>
          <h2 style="margin: 10px 0 0 0;font-size: 20px;">{{product.name}}</h2>
          <van-tag color="#4c87d1" class="radius" style="padding: 2px 7px;margin-top:5px" plain><svg t="1649159814576" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2240" width="12" height="12"><path d="M512 63.2L160.8 226.4v244.8c0 226.4 149.6 437.6 351.2 489.6 201.6-51.2 351.2-263.2 351.2-489.6V226.4L512 63.2z m287.2 408c0 96.8-31.2 193.6-88 272.8-52.8 73.6-122.4 126.4-199.2 149.6-76-24-146.4-76-199.2-149.6-56.8-79.2-88-176.8-88-272.8V267.2L512 134.4l287.2 133.6v203.2zM458.4 592l204-204 45.6 45.6L504 637.6l-45.6 45.6-45.6-45.6-90.4-90.4 45.6-45.6L458.4 592z" p-id="2241" fill="#4c87d1"></path></svg>保本保息</van-tag> <van-tag color="#ebf5fd" text-color="#4c87d1">当日起息</van-tag> <van-tag color="#ebf5fd" text-color="#4c87d1">随存随取</van-tag>
          <h1 style="margin: 20px 0 5px 0; color: #d7000f">{{product.rate}}%</h1>
        </template>
        <template #right-icon>
          <div style="width: 35%;margin-top: 80px">
            <h4 style="font-weight: 400;color:#888;margin:0;font-size:13px">产品期限 <span style="font-size: 18px;font-weight: 700;color:#000">{{product.time}}</span> 个月</h4>
            <h4 style="font-weight: 400;color:#888;margin:0;font-size:13px">起存金额 <span style="font-size: 18px;font-weight: 700;color:#000">{{product.money}}</span> 元</h4>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);margin-top: 5px" inset>
      <van-cell>
        <template #title>
          <h2 style="margin: 10px 0;font-size: 20px;">存款亮点</h2>
          <van-tag color="#8f9ab6" style="margin-bottom: 10px" class="radius" text-color="#e2ecf5">当日起息</van-tag><span style="font-size: 12px;margin-left: 10px"> 每日22:00前存入, 当日起息 (含节假日) </span>
          <br>
          <van-tag color="#8f9ab6" style="margin-bottom: 10px" class="radius" text-color="#e2ecf5">随存随取</van-tag><span style="font-size: 12px;margin-left: 10px"> 任意自然日存入, 支持提前支取</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div style="padding: 20px">
      <h2 style="margin: 10px 0;font-size: 20px;">交易规则</h2>
      <div style="">
        <div style="width: 60%;float:left">
          <div style="height: 30px;margin-bottom:5px">
            <div style="float: left;color:#ef4f5c;font-size:12px;font-weight:700"><span>{{new Date().toLocaleDateString()}}</span><br><span>预计起息日</span></div>
            <div style="float: right;color:#777;font-size:12px;font-weight:700;text-align:right"><span>{{new Date(new Date().getTime() + product.time*30*24*3600*1000).toLocaleDateString()}}</span><br><span>到期日</span></div>
          </div>
          <div style="border-left: 2px solid #ef4f5c;height: 30px;position: relative">
            <span style="display: inline-block; position:absolute;bottom:0;left:0; height: 17px;width:100%;background-color: #ef4f5c;color:#fff;font-size:12px;text-align:center;line-height:17px">持有期{{product.time}}个月</span>
          </div>
        </div>
        <div style="width: 38%;float:left;margin-left: 2px">
          <div style="height: 30px;margin-bottom:5px">
            <div style="float: right;color:#777;font-size:12px;font-weight:700;text-align:right"><span>到期日24点前</span><br><span>本息到账</span></div>
          </div>
          <div style="border-left: 2px solid #8f9ab6;border-right: 2px solid #8f9ab6;height: 30px;position: relative">
            <span style="display: inline-block; position:absolute;bottom:0;left:0; height: 17px;width:100%;background-color: #8f9ab6"></span>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
      <van-tabs v-model="activeName" style="margin-top: 15px">
        <van-tab title-active-color="#ef4f5c" title="计息规则" name="a">
          <p style="font-size: 14px;margin-top: 15px;margin-left: 10px;color: #888">
            <span style="color: #d50110;font-weight:700">• 提前支取收益:</span> 支持提前支取，按支取日我行活期存款利率计息部分提前支取的，提前支取部分按支取日我行活期存款利率计息，其余部分到期按存入日约定利率计息
          </p>
          <p style="font-size: 14px;margin-top: 5px;margin-left: 10px;color: #888">
            <span style="color: #d50110;font-weight:700">• 满期综合收益:</span> 持有满期按存入日约定利率计息
          </p>
        </van-tab>
        <van-tab title-active-color="#ef4f5c" title="存入规则" name="b">
          <p style="font-size: 14px;margin-top: 15px;margin-left: 10px;color: #888">
            <span style="color: #d50110;font-weight:700">• 账户地区限制:</span> 仅限开户银行为{{product.location}}的账户可以购买
          </p>
        </van-tab>
        <van-tab title-active-color="#ef4f5c" title="支取规则" name="c"><h4>计息规则计息规则计息规则计息规则</h4></van-tab>
      </van-tabs>
    </div>
    <van-button style="width: 60%;margin-left: 20%;position:absolute;bottom:10px" round color="#d50110" @click="goBuy()">立即存入</van-button>
    <van-overlay :show="show"/>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product:{},
      loading: true,
      activeName: "a",
      show: false
    }
  },
  props: ["wh"],
  methods: {
    goBuy(){
      this.show = true;
      const load = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '加载中...',
      });
      setTimeout(() => {
        this.loading = false;
        load.clear();
        this.show = false;
        this.$emit("getRouter", "ProductBuy");
      }, 500);
    }
  },
  mounted() {
    this.product = JSON.parse(sessionStorage.getItem("product"));
    this.show = true;
    const load = this.$toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...',
    });
    setTimeout(() => {
      this.loading = false;
      this.show = false;
      load.clear();
    }, 500);
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
  height: 80px;
  background-color: #d50110;
}

.van-cell__value {
    color: #494949;
    font-size: 14px;
    text-align: left;
    padding-top: 45px;
    font-weight: 600;
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
</style>