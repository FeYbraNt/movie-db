import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Plugins
import './plugins/vuetify'
import apolloProvider from './plugins/vue-apollo'

Vue.config.productionTip = false

new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
