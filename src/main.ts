import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'
import { splitLinesLoopDirective } from './directives/textRevealAnimation'
import { initLenis } from './lib/lenis'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ui)
app.directive('text-reveal', splitLinesLoopDirective)

app.mount('#app')
initLenis()
