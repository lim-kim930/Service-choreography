<template>
  <div class="cotainer" :style="{'background-color': loading?'#fff':'#f5f5f5'}">
    <van-nav-bar
      :title="title"
      :border="false"
      style="height: 50px;position:fixed;width:100%;top:0"
      :left-arrow="title!=='存款'&& title!=='个人中心'"
      @click-left="onClickLeft"
      :right-text="title==='个人中心'?'登出':''"
      @click-right="onClickRight"
    />
    <component
      :is="router"
      :wh="wh"
      @getLoading="getLoading"
      @getRouter="getRouter"
      @getTitle="getTitle"
    ></component>
    <van-tabbar v-show="title==='存款' || title==='个人中心'" v-model="active" active-color="#d7000f" @change="switchRoute">
      <van-tabbar-item icon="cash-back-record">存款产品</van-tabbar-item>
      <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Product from './ProductPage'
import User from './UserCenter'
import ProductInfo from './ProductInfo'
import ProductBuy from './ProductBuy'
export default {
  data() {
    return {
      active: 0,
      router: "Product",
      loading: true,
      title: ""
    }
  },
  components: {
    Product,
    User,
    ProductInfo,
    ProductBuy
  },
  props: ["wh"],
  methods: {
    switchRoute(index) {
      this.router = index === 0 ? "Product" : "User";
      this.title = index === 0 ? "存款" : "个人中心";
    },
    getLoading(val) {
      this.loading = val;
    },
    getRouter(val) {
      this.router = val
    },
    getTitle(val) {
      console.log(val);
      this.active = val==="存款"?0:1
      this.title = val
    },
    onClickLeft() {
      switch (this.router) {
        case "ProductInfo":
          this.router = "Product"
          this.active = 0
          this.title = "存款"
          break;
        case "ProductBuy":
          this.router = "ProductInfo"
          break;
      }
    },
    onClickRight() {
      localStorage.removeItem("user");
      this.$emit("getRouter","LogIn")
    }
  },
  mounted() {
    this.title = "存款";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.van-nav-bar {
  background-color: #d50110;
}
</style>
<style lang="less">
.van-nav-bar__content {
  height: 50px !important;
}
.van-nav-bar__title {
  color: #ffeef1 !important;
  font-size: 16px;
}
.van-nav-bar__arrow {
  color: #ffeef1 !important;
}
.van-nav-bar__text {
  color: #ffeef1 !important;

}
</style>
