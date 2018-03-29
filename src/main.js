import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import layer from 'vue-layer'
import App from './App'
import router from '~/router'
Vue.prototype.$layer = layer(Vue);
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
