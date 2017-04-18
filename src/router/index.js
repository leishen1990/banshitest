import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Guider from '@/components/Guider'

Vue.use(Router)

export default new Router({
  mode: 'hash', //   "hash" | "history" | "abstract";
  base: '/', // 默认值: "/",应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
  routes: [
    {
      path: '/',
      name: 'Guider',
      component: Guider
    },
    {
      path: '/banshiList',
      name: 'banshiList',
      component: require('@/components/banshiList')
    }
  ]
})
