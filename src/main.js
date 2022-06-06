import Vue from 'vue'
import App from './App.vue'
//引入vant
import { Button, Dialog, Form, Field, Toast, Tabbar, TabbarItem, Skeleton, NavBar, NoticeBar, PullRefresh, Cell, CellGroup, Icon, Tag, Tab, Tabs, Divider,Overlay,Rate, Image as VanImage, ContactCard,Empty   } from 'vant';
import { JSEncrypt } from 'jsencrypt'
import 'vant/lib/index.css';
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Tabbar)
Vue.use(TabbarItem);
Vue.use(Skeleton);
Vue.use(NavBar);
Vue.use(NoticeBar);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Divider);
Vue.use(Overlay);
Vue.use(Rate);
Vue.use(VanImage);
Vue.use(ContactCard);
Vue.use(Empty);
//引入animate.css
import "animate.css"
//引入axios
import axios from "axios"
// axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.JSEncrypt = JSEncrypt;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
