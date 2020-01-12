import Vue from 'vue'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/theme/nord.css'

Vue.use(VueCodemirror, {
  options: { theme: 'material-palenight' }
})
