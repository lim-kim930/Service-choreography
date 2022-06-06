<template>
  <div class="hello">
    <div v-if="loading" :style="{height: wh+'px'}">
      <br />
      <van-skeleton title :row="6" :row-width="['50%','100%','100%','60%','100%','100%']" />
      <br />
      <van-skeleton title :row="6" :row-width="['50%','100%','100%','60%','100%','100%']" />
      <br />
      <van-skeleton title :row="6" :row-width="['50%','100%','100%','60%','100%','100%']" />
    </div>
    <div v-if="!loading" :style="{height: wh+'px'}">
      <van-notice-bar
        style="position:fixed;top:50px;width:100%;z-index:1000"
        left-icon="volume-o"
        text="新的存款产品已上线, 快来看看吧!"
      />
      <van-pull-refresh style="margin-top:70px" v-model="pullLoading" @refresh="onRefresh">
        <div style="padding-bottom: 60px;box-sizing: content-box;">
            <h3 style="margin: 25px 0 15px 20px">定期存款<span style="margin-left: calc(100% - 130px); font-weight: 400;font-size:14px;line-height:26px;color:#999">更多></span></h3>
            <van-empty style="padding:0" v-if="products1Data.length===0" description="空空如也~" />
            <van-cell-group style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);" inset>
              <van-cell @click="goBuy(product)" :value="'期限为'+product.time+'个月'" label="年利率" v-for="product in products1Data" v-bind:key="product.productId">
                <template #title>
                  <h4 style="margin: 10px 0;font-size: 16px;font-weight:700">{{product.name}}</h4>
                  <h1 style="margin: 5px 0; color: #d7000f">{{product.rate.toFixed(4)}}%</h1>
                </template>
              </van-cell>
            </van-cell-group>
            <h3 style="margin: 25px 0 15px 20px">通知存款<span style="margin-left: calc(100% - 130px); font-weight: 400;font-size:14px;line-height:26px;color:#999">更多></span></h3>
            <van-empty style="padding:0" v-if="products2Data.length===0" description="空空如也~" />
            <van-cell-group style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)" inset>
              <van-cell @click="goBuy(product)" value="本息缓存" label="年利率" v-for="product in products2Data" v-bind:key="product.productId">
                <template #title>
                  <h4 style="margin: 10px 0;font-size: 16px;font-weight:700">{{product.day}}天通知存款</h4>
                  <h1 style="margin: 5px 0; color: #d7000f">{{product.rate.toFixed(4)}}%</h1>
                </template>
              </van-cell>
                <!-- <div v-for="product in products2Data" v-bind:key="product.productId">
                    <van-cell>
                        <template #title>
                            <span style="font-size: 16px;font-weight:700">{{product.day}}天通知存款</span>
                        </template>
                    </van-cell>
                    <van-cell value="本息缓存" label="年利率">
                        <template #title>
                            <h1 style="margin: 5px 0; color: #d7000f">{{product.rate}}%</h1>
                        </template>
                    </van-cell>
                </div> -->
            </van-cell-group>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        loading: true,
        pullLoading: false,
        products1Data: [],
        products2Data: []
    }
  },
  props: ["wh"],
  methods: {
     onRefresh() {
       this.axios({
        method: "get",
        url: "https://api.limkim.xyz/getProduct",
      }).then((response) => {
        this.products1Data=response.data.data.products1Data;
        this.products2Data=response.data.data.products2Data;
        this.$toast('刷新成功');
        this.pullLoading = false;
      }).catch(() => {
        this.$dialog.alert({
          title: '提示',
          message: '获取产品信息出错啦~, 看来程序猿要加班了＞︿＜',
        });
        this.pullLoading = false;
      });
    },
    goBuy(product){
        this.$emit("getTitle", product.name);
        this.$emit("getRouter", "ProductInfo");
        product.rate = product.rate.toFixed(4)
        sessionStorage.setItem("product",JSON.stringify(product));
        this.$emit("getLoading", true)
    }
  },
  mounted() {
    const load = this.$toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...',
    });
    this.axios({
      method: "get",
      url: "https://api.limkim.xyz/getProduct",
    }).then((response) => {
      this.products1Data=response.data.data.products1Data;
      this.products2Data=response.data.data.products2Data;
      this.loading = false;
      this.$emit("getLoading", false)
      load.clear();
    }).catch(() => {
      this.$dialog.alert({
        title: '提示',
        message: '获取产品信息出错啦~, 看来程序猿要加班了＞︿＜',
      });
      this.loading = false;
      this.$emit("getLoading", false)
      load.clear();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.van-cell__value {
    color: #494949;
    font-size: 14px;
    text-align: left;
    padding-top: 45px;
    font-weight: 600;
}
</style>
