// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import PLATFORM_CONFIGS from './config/platform-configs'
import APP_CONFIGS from './config/app-configs'
import attachFastClick from 'fastclick'
import vimo from 'vimo'

import {Navbar} from 'vimo/components/Navbar'
import {Toolbar,ToolbarTitle} from 'vimo/components/toolbar'
import {Segment,SegmentButton} from 'vimo/components/segment'
import {ActionSheet} from 'vimo/components/action-sheet'
import {Button} from 'vimo/components/button'
import {List} from 'vimo/components/list'
import { Select, Option } from 'vimo/components/select'
import { ListHeader, ItemGroup, Item, ItemSliding, ItemOptions, ItemDivider } from 'vimo/components/item'
import { Label } from 'vimo/components/label'
import { Icon } from 'vimo/components/icon'
// import 'ionicons/dist/css/ionicons.css'
import './lib/icomoon/iconBanshi.css'

new attachFastClick(document.body)
// 平台基础安装
Vue.use(vimo, {
  router: router,
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
})

Vue.component(Segment.name,Segment);
Vue.component(SegmentButton.name,SegmentButton);

Vue.component(Navbar.name,Navbar);
Vue.component(Toolbar.name,Toolbar);
Vue.component(ToolbarTitle.name,ToolbarTitle);

Vue.component(Button.name,Button);
Vue.component(List.name,List);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
Vue.component(ListHeader.name,ListHeader);
Vue.component(Item.name,Item);
Vue.component(ItemSliding.name,ItemSliding);
Vue.component(Label.name,Label);
Vue.component(Icon.name, Icon)


Vue.prototype.$actionSheet = ActionSheet;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
