import Vue from 'vue'
import App from './App.vue'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/theme/nord.css'
import './registerServiceWorker'
import './assets/scss/main.scss'

Vue.use(VueCodemirror, {
  options: { theme: 'material-palenight' }
})

Vue.config.productionTip = process.env.NODE_MODULES !== 'production'

new Vue({
  render: h => h(App)
}).$mount('#app')
