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
      path: '/eventDetails',
      name: 'eventDetails',
      component  (resolve) {
        require(['@/components/eventDetails/eventDetails'], resolve)
      },
      redirect: {name: 'eventDetailsTab1'},
      children: [
        {
          path: '/eventDetails/Tab1',
          name: 'eventDetailsTab1',
          component  (resolve) {
            require(['@/components/eventDetails/tabs/tab1.vue'], resolve)
          }
        },
        {
          path: '/eventDetails/Tab2',
          name: 'eventDetailsTab2',
          component  (resolve) {
            require(['@/components/eventDetails/tabs/tab2.vue'], resolve)
          }
        },
        {
          path: '/eventDetails/Tab3',
          name: 'eventDetailsTab3',
          component  (resolve) {
            require(['@/components/eventDetails/tabs/tab3.vue'], resolve)
          }
        }
      ]
    },
  ]
})
