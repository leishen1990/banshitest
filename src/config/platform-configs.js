/**
 * Created by Hsiang on 2017/3/22.
 *
 * 用户自定义配置
 */
export default {
  ios: {
    mode:'ios',
    settings: {
      statusbarPadding: false,
      pageTransition: 'zoom-transition',  // ios-transition/zoom-transition/fade-bottom-transition/fade-right-transition
    }
  },
  android: {
    mode:'ios',
    settings: {
      statusbarPadding: false,
      pageTransition: 'zoom-transition', // ios-transition/zoom-transition/fade-bottom-transition/fade-right-transition
    }
  },
  wechat: {
    settings: {
      hideNavBar: true,
    },
    onBridgeReady(plt){}
  },
  alipay: {
    settings: {
      hideNavBar: true,
    }
  },
  dingtalk: {
    settings: {
      hideNavBar: true,
    },
  },
  qq: {
    settings: {
      hideNavBar: true,
    },
  },
  dtdream: {
    settings: {
      hideNavBar: true,
    },
  },
}