import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/scss/main.scss'

Vue.config.productionTip = process.env.NODE_MODULES !== 'production'

import(/* webpackChunkName: "codemirror" */ './codemirror')
  .then(() => {
    new Vue({
      created () {
        document.body.classList.remove('starting')
      },
      render: h => h(App)
    }).$mount('#app')
  })
