import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue, iosTransitionAnimation } from '@ionic/vue'

import router from './router'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

import '@capacitor-community/safe-area'

const app = createApp(App)

app.use(IonicVue, {
  navAnimation: iosTransitionAnimation
})
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
