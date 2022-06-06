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
    <div v-if="!loading" :style="{'padding-bottom':'60px','margin-top':'50px','padding-top':'10px','min-hight':wh+'px'}">
      <van-cell-group style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);margin: 10px 10px" inset>
        <van-cell style="padding-bottom: 25px">
          <template #title>
            <van-image
                style="vertical-align: bottom;"
                round
                width="45px"
                height="45px"
                src="https://edu.limkim.cn/static/user.png"
              />
            <h2 style="margin: 10px 0 0 20px;font-size: 20px;display:inline-block">
              {{user.name}}
            <br>
            <van-rate :value="4" readonly />
            </h2>
          </template>
        </van-cell>
        </van-cell-group>
        <van-cell-group>
        <van-cell>
          <template #title>
            <h2 style="margin: 10px 0;font-size: 20px;">我的账户</h2>
            <div>
              <van-cell style="border: 1px #ddd solid;border-radius: 10px">
                <template #title>
                  <h2 style="display:inline-block;margin: 10px 0;font-size: 20px;letter-spacing:1px">{{user.account}}</h2>
                  <br>
                  可用余额: <span style="margin-left: calc(100% - 150px);font-size: 17px;font-weight: 700">{{user.money.toFixed(2)}}</span>
                  开户地区: <span style="margin-left: calc(100% - 120px);font-size: 17px;font-weight: 700">{{user.location}}</span>
                  <br>
                </template>
              </van-cell>
            </div>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <h2 style="margin: 10px 0;font-size: 20px;">我的产品</h2>
            <van-empty v-if="user.product.length===0" description="您还没有购买过产品哦~" />
            <van-cell style="border-radius: 10px" v-for="item in user.product" v-bind:key="item.date">
              <template #title>
                <h4 style="margin: 10px 0;font-size: 17px;letter-spacing:1px">{{item.name}}<span style="font-size:12px;color:#777;font-weight:300;margin-left: 10px">查看详情></span></h4>
                利率: <span style="margin-left: calc(100% - 140px);font-size: 17px;font-weight: 700">{{item.rate}}%</span>
                <br>
                购买日期: <span style="margin-left:100px;font-size: 17px;font-weight: 700">{{item.date}}</span>
              </template>
            </van-cell>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      user: {}
    }
  },
  props: ["wh"],
  methods: {

  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    const load = this.$toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...',
    });
    setTimeout(() => {
      this.loading = false;
      load.clear();
    }, 100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
