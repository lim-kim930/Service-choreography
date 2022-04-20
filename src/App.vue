<template>
  <div class="tdesign-demo-item--layout">
    <t-header>
      <t-head-menu value="item1" height="120px">
        <img
          slot="logo"
          :width="collapsed?50:232"
          class="logo"
          :src="logoSrc"
          style="transition: all 0.3s"
          alt="logo"
        />
        <template #operations>
          <a href="javascript:;">
            <icon class="t-menu__operations-icon" name="mail" />
          </a>
          <a href="javascript:;">
            <icon class="t-menu__operations-icon" name="user" />
          </a>
          <a href="javascript:;" @click="logout">
            <icon class="t-menu__operations-icon" name="logout" />
          </a>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside :style="{'width': (collapsed?50:232) + 'px'}">
        <t-menu
          theme="light"
          v-model="activeIndex"
          @change="indexRouteSwitch"
          style="margin-right: 50px"
          :height="wh + 'px'"
          :collapsed="collapsed"
        >
          <t-menu-item value="productMange">
            <icon slot="icon" name="control-platform" />产品管理
          </t-menu-item>
          <t-menu-item value="serviceManage">
            <icon slot="icon" name="root-list" />原子服务管理
          </t-menu-item>
          <t-menu-item value="workflow">
            <icon slot="icon" name="fork" />服务编排
          </t-menu-item>
          <t-menu-item value="deploy">
            <icon slot="icon" name="server" />部署管理
          </t-menu-item>
          <t-menu-item value="traceSource">
            <icon slot="icon" name="history" />业务溯源
          </t-menu-item>
          <t-menu-item value="usersManage">
            <icon slot="icon" name="usergroup" />用户管理
          </t-menu-item>
          <template #operations>
            <icon class="t-menu__operations-icon" :name="iconName" @click.native="changeCollapsed" />
          </template>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content :style="{ height: wh - 128 + 'px' }">
          <div class="container">
            <router-view :wh="wh"></router-view>
          </div>
        </t-content>
        <t-footer>Copyright @ 2019-{{new Date().getFullYear()}} All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      collapsed: false,
      activeIndex: "dashboard",
      logoSrc: "http://asw.limkim.cn/logo.png",
      wh: 0
    };
  },
  components: { Icon },
  computed: {
    iconName() {
      return this.collapsed ? 'chevron-right' : 'chevron-left';
    },
  },
  methods: {
    logout() {
      const dialog = this.$dialog.confirm({
        header: "警告",
        theme: "warning",
        body: "确定要退出登录吗?",
        onConfirm: () => {
          dialog.hide();
          window.location.href = "./sign";
        },
        onClose: () => {
          dialog.hide();
        }
      });
    },
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      if (this.collapsed)
        setTimeout(() => {
          this.logoSrc = "http://asw.limkim.cn/logo_icon.png";
        }, 300);
      else
        this.logoSrc = "http://asw.limkim.cn/logo.png";
    },
    indexRouteSwitch(index) {
      switch (index) {
        case "productMange":
          this.$router.push("/productMange");
          break;
        case "workflow":
          this.$router.push("/workflow/list");
          break;
        case "serviceManage":
          this.$router.push("/serviceManage");
          break;
        case "deploy":
          this.$router.push("/deploy");
          break;
        case "traceSource":
          this.$router.push("/traceSource");
          break;
        case "usersManage":
          this.$router.push("/usersManage");
          break;
      }
    },
    redirect() {
      switch (this.$route.path) {
        case "/productMange":
          this.activeIndex = "productMange";
          break;
        case "/workflow/list":
        case "/workflow/edit":
          this.activeIndex = "workflow";
          break;
        case "/serviceManage":
          this.activeIndex = "serviceManage";
          break;
        case "/deploy":
          this.activeIndex = "deploy";
          break;
        case "/traceSource":
          this.activeIndex = "traceSource";
          break;
        case "/usersManage":
          this.activeIndex = "usersManage";
          break;
      }
    },
    windowHeight() {
      const de = document.documentElement;
      return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    }
  },
  mounted() {
    this.wh = this.windowHeight() < 600 ? 600 : this.windowHeight();
    window.onresize = () => {
      this.wh = this.windowHeight() < 600 ? 600 : this.windowHeight();
    };
    this.redirect();
  },
  watch: {
    $route() {
      this.redirect();
    }
  },
};
</script>
<style lang="less" scoped>
.t-layout {
  .t-layout__content {
    text-align: center;
    padding: 24px 24px 0;
    .container {
      background: #fff;
      height: 100%;
      overflow: auto;
      word-wrap: break-word;
    }
  }
}
</style>